import { useMemo, useState } from 'react'
import { ArrowRight, Check, Gauge, Layers3, RotateCcw, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const PROJECT_BRIEF_STORAGE_KEY = 'nexbuild-project-brief'

type Platform = 'web' | 'mobile' | 'cloud'
type Delivery = 'sprint' | 'phased'
type Complexity = 'focused' | 'advanced' | 'systems'

type ConfigState = {
  platform: Platform
  delivery: Delivery
  complexity: Complexity
}

type Option<T extends string> = {
  id: T
  label: string
  detail: string
}

const platformOptions: Option<Platform>[] = [
  { id: 'web', label: 'Web platform', detail: 'Responsive product layer' },
  { id: 'mobile', label: 'Mobile app', detail: 'Native-feeling mobile system' },
  { id: 'cloud', label: 'Cloud infrastructure', detail: 'Scalable service foundation' },
]

const deliveryOptions: Option<Delivery>[] = [
  { id: 'sprint', label: 'Sprint', detail: 'Focused launch sequence' },
  { id: 'phased', label: 'Phased', detail: 'Measured release program' },
]

const complexityOptions: Option<Complexity>[] = [
  { id: 'focused', label: 'Focused', detail: 'Lean scope, clear outcome' },
  { id: 'advanced', label: 'Advanced', detail: 'Multiple connected flows' },
  { id: 'systems', label: 'Systems', detail: 'Complex product ecosystem' },
]

const platformData: Record<Platform, { weeks: number; coverage: number; velocity: number; nodes: string[] }> = {
  web: { weeks: 8, coverage: 76, velocity: 84, nodes: ['interface', 'frontend', 'api'] },
  mobile: { weeks: 10, coverage: 82, velocity: 72, nodes: ['mobile', 'sync', 'api'] },
  cloud: { weeks: 12, coverage: 91, velocity: 62, nodes: ['infra', 'api', 'data'] },
}

const complexityData: Record<Complexity, { weeks: number; coverage: number; flexibility: number; nodes: string[] }> = {
  focused: { weeks: 0, coverage: 0, flexibility: 68, nodes: [] },
  advanced: { weeks: 4, coverage: 9, flexibility: 82, nodes: ['auth', 'analytics'] },
  systems: { weeks: 8, coverage: 17, flexibility: 94, nodes: ['auth', 'analytics', 'automation'] },
}

const deliveryData: Record<Delivery, { multiplier: number; velocity: number; label: string }> = {
  sprint: { multiplier: 0.72, velocity: 100, label: 'SPRINT MODE' },
  phased: { multiplier: 1.18, velocity: 74, label: 'PHASED MODE' },
}

const nodePositions = [
  { id: 'interface', label: 'INTERFACE', x: 34, y: 80, width: 124 },
  { id: 'mobile', label: 'MOBILE SHELL', x: 34, y: 80, width: 124 },
  { id: 'frontend', label: 'FRONTEND', x: 224, y: 22, width: 118 },
  { id: 'sync', label: 'SYNC LAYER', x: 224, y: 22, width: 118 },
  { id: 'infra', label: 'INFRASTRUCTURE', x: 224, y: 22, width: 118 },
  { id: 'api', label: 'API CORE', x: 404, y: 80, width: 104 },
  { id: 'data', label: 'DATA VAULT', x: 404, y: 164, width: 104 },
  { id: 'auth', label: 'AUTH', x: 224, y: 164, width: 118 },
  { id: 'analytics', label: 'ANALYTICS', x: 34, y: 248, width: 124 },
  { id: 'automation', label: 'AUTOMATION', x: 404, y: 248, width: 104 },
]

function clamp(value: number) {
  return Math.max(0, Math.min(100, value))
}

function getBrief(config: ConfigState, weeks: number, mode: string) {
  const platform = platformOptions.find((option) => option.id === config.platform)?.label
  const delivery = deliveryOptions.find((option) => option.id === config.delivery)?.label
  const complexity = complexityOptions.find((option) => option.id === config.complexity)?.label

  return [
    'PROJECT CONFIGURATION',
    `Platform: ${platform}`,
    `Delivery: ${delivery}`,
    `Complexity: ${complexity}`,
    `Estimated timeline: ${weeks} weeks (${mode})`,
    '',
    'I used the Nexbuild Build Engine to map this starting point. I would like to discuss the scope, milestones, and next steps.',
  ].join('\n')
}

export default function ProjectConfigurator() {
  const navigate = useNavigate()
  const [config, setConfig] = useState<ConfigState>({
    platform: 'web',
    delivery: 'sprint',
    complexity: 'advanced',
  })
  const [loaded, setLoaded] = useState(false)

  const projection = useMemo(() => {
    const platform = platformData[config.platform]
    const complexity = complexityData[config.complexity]
    const delivery = deliveryData[config.delivery]
    const weeks = Math.max(4, Math.round((platform.weeks + complexity.weeks) * delivery.multiplier))
    const activeNodes = new Set([...platform.nodes, ...complexity.nodes])
    const coverage = clamp(platform.coverage + complexity.coverage)
    const velocity = clamp(Math.round(platform.velocity * (delivery.velocity / 100)))
    const flexibility = clamp(complexity.flexibility + (config.delivery === 'phased' ? 6 : 0))

    return {
      weeks,
      mode: delivery.label,
      activeNodes,
      coverage,
      velocity,
      flexibility,
      brief: getBrief(config, weeks, delivery.label),
    }
  }, [config])

  const setValue = <Key extends keyof ConfigState>(key: Key, value: ConfigState[Key]) => {
    setLoaded(false)
    setConfig((current) => ({ ...current, [key]: value }))
  }

  const resetConfig = () => {
    setLoaded(false)
    setConfig({ platform: 'web', delivery: 'sprint', complexity: 'advanced' })
  }

  const loadIntoBrief = () => {
    window.sessionStorage.setItem(PROJECT_BRIEF_STORAGE_KEY, projection.brief)
    setLoaded(true)
    window.setTimeout(() => navigate('/contact'), 260)
  }

  return (
    <section className="project-configurator" aria-labelledby="build-engine-title">
      <div className="configurator-header">
        <div>
          <span className="section-label">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            Build Engine
            <span className="section-label-code">CFG_02</span>
          </span>
          <h2 id="build-engine-title" className="heading-2 mt-5 text-white text-balance">
            Spec the system before we build it.
          </h2>
          <p className="prose-muted mt-4 max-w-2xl">
            Tune a starting brief and watch the delivery system reconfigure in real time. Nothing is locked in — this is the first useful conversation.
          </p>
        </div>
        <button type="button" className="configurator-reset" onClick={resetConfig}>
          <RotateCcw className="h-3.5 w-3.5" />
          Reset spec
        </button>
      </div>

      <div className="configurator-console">
        <div className="configurator-controls">
          <Selector
            label="01 / PLATFORM"
            icon={<Layers3 className="h-4 w-4" />}
            options={platformOptions}
            value={config.platform}
            onChange={(value) => setValue('platform', value)}
          />
          <Selector
            label="02 / DELIVERY SPEED"
            icon={<Zap className="h-4 w-4" />}
            options={deliveryOptions}
            value={config.delivery}
            onChange={(value) => setValue('delivery', value)}
          />
          <Selector
            label="03 / COMPLEXITY LEVEL"
            icon={<Gauge className="h-4 w-4" />}
            options={complexityOptions}
            value={config.complexity}
            onChange={(value) => setValue('complexity', value)}
          />
        </div>

        <div className="configurator-preview">
          <div className="configurator-preview-topline">
            <span>LIVE SYSTEM MAP</span>
            <span className="configurator-mode">
              <span className="hud-status-dot" />
              {projection.mode}
            </span>
          </div>

          <div className="wireframe-stage">
            <svg className="project-wireframe" viewBox="0 0 542 328" role="img" aria-label="Animated project system wireframe">
              <defs>
                <pattern id="wire-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(72,184,139,0.09)" strokeWidth="1" />
                </pattern>
                <filter id="wire-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <rect width="542" height="328" fill="url(#wire-grid)" />
              <path className="wireframe-link is-active" d="M158 104 H224 V48" />
              <path className="wireframe-link" d="M342 48 H404 V104" />
              <path className="wireframe-link" d="M158 104 H196 V188 H224" />
              <path className="wireframe-link" d="M342 188 H378 V104 H404" />
              <path className="wireframe-link" d="M96 140 V248" />
              <path className="wireframe-link" d="M456 140 V248" />
              <circle className="wireframe-core" cx="271" cy="126" r="44" filter="url(#wire-glow)" />
              <circle className="wireframe-core-ring" cx="271" cy="126" r="56" />
              <text className="wireframe-core-label" x="271" y="123" textAnchor="middle">BUILD</text>
              <text className="wireframe-core-subtitle" x="271" y="139" textAnchor="middle">ENGINE</text>
              {nodePositions.map((node) => {
                const active = projection.activeNodes.has(node.id)
                return (
                  <g key={node.id} className={`wireframe-node ${active ? 'is-active' : ''}`}>
                    <rect x={node.x} y={node.y} width={node.width} height="40" rx="5" />
                    <circle cx={node.x + 14} cy={node.y + 20} r="3" />
                    <text x={node.x + 26} y={node.y + 24}>{node.label}</text>
                  </g>
                )
              })}
            </svg>
          </div>

          <div className="configurator-metrics">
            <Metric label="SYSTEM COVERAGE" value={projection.coverage} />
            <Metric label="DELIVERY VELOCITY" value={projection.velocity} />
            <Metric label="FLEXIBILITY INDEX" value={projection.flexibility} />
          </div>

          <div className="configurator-footer">
            <div className="configurator-timeline">
              <div className="configurator-timeline-label">
                <span>EST. MILESTONE TIMELINE</span>
                <strong>{projection.weeks} WEEKS</strong>
              </div>
              <div className="timeline-track">
                {['DISCOVERY', 'DESIGN', 'BUILD', 'LAUNCH'].map((label, index) => {
                  const progress = ((index + 1) / 4) * 100
                  return (
                    <div key={label} className="timeline-stage" style={{ left: `${progress}%` }}>
                      <span className="timeline-dot" />
                      <span>{label}</span>
                    </div>
                  )
                })}
                <div className="timeline-progress" style={{ width: '100%' }} />
              </div>
            </div>
            <button type="button" className="btn-primary configurator-brief-button" onClick={loadIntoBrief}>
              {loaded ? (
                <>
                  <Check className="h-4 w-4" />
                  Brief loaded
                </>
              ) : (
                <>
                  Load into brief
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

type SelectorProps<T extends string> = {
  label: string
  icon: React.ReactNode
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}

function Selector<T extends string>({ label, icon, options, value, onChange }: SelectorProps<T>) {
  return (
    <fieldset className="configurator-selector">
      <legend>
        {icon}
        {label}
      </legend>
      <div className="configurator-options">
        {options.map((option) => {
          const active = option.id === value
          return (
            <button
              key={option.id}
              type="button"
              className={`configurator-option ${active ? 'is-active' : ''}`}
              onClick={() => onChange(option.id)}
              aria-pressed={active}
            >
              <span className="configurator-option-marker">{active ? <Check className="h-3 w-3" /> : null}</span>
              <span>
                <strong>{option.label}</strong>
                <small>{option.detail}</small>
              </span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="configurator-metric">
      <div className="configurator-metric-label">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div className="metric-track">
        <div className="metric-fill" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}