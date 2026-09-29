import { useEffect, useRef, useState } from 'react'

type Mission = {
  id: string
  code: string
  label: string
}

const missions: Mission[] = [
  { id: 'hero', code: '00', label: 'Hero' },
  { id: 'services', code: '01', label: 'Services' },
  { id: 'case-studies', code: '02', label: 'Case Studies' },
  { id: 'architecture', code: '03', label: 'Architecture' },
  { id: 'contact', code: '04', label: 'Contact' },
]

function getScrollDepth() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight
  return scrollable > 0 ? Math.min(100, Math.round((window.scrollY / scrollable) * 100)) : 0
}

function getActiveMission() {
  const marker = window.scrollY + window.innerHeight * 0.34
  let active = missions[0].id

  missions.forEach((mission) => {
    const section = document.getElementById(mission.id)
    if (section && section.offsetTop <= marker) active = mission.id
  })

  return active
}

export default function DraftingHud() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [scrollDepth, setScrollDepth] = useState(0)
  const [activeMission, setActiveMission] = useState('hero')
  const frame = useRef<number | null>(null)
  const reducedMotion = useRef(false)

  useEffect(() => {
    reducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const updateTelemetry = () => {
      frame.current = null
      setScrollDepth(getScrollDepth())
      setActiveMission(getActiveMission())
    }

    const requestTelemetryUpdate = () => {
      if (frame.current === null) frame.current = window.requestAnimationFrame(updateTelemetry)
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      setCursor({ x: Math.round(event.clientX), y: Math.round(event.clientY) })
    }

    updateTelemetry()
    window.addEventListener('scroll', requestTelemetryUpdate, { passive: true })
    window.addEventListener('resize', requestTelemetryUpdate, { passive: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', requestTelemetryUpdate)
      window.removeEventListener('resize', requestTelemetryUpdate)
      window.removeEventListener('pointermove', handlePointerMove)
      if (frame.current !== null) window.cancelAnimationFrame(frame.current)
    }
  }, [])

  const jumpToMission = (id: string) => {
    const section = document.getElementById(id)
    if (!section) return
    section.scrollIntoView({ behavior: reducedMotion.current ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] select-none" aria-label="Live drafting telemetry">
      <div className="hud-corner hud-corner-top-left">
        <span className="hud-kicker">NEXBUILD / DRAFT MODE</span>
        <span className="hud-readout">LIVE TELEMETRY</span>
      </div>

      <div className="hud-corner hud-corner-bottom-left">
        <span className="hud-kicker">POINTER VECTOR</span>
        <span className="hud-value">
          X {String(cursor.x).padStart(4, '0')} <span className="text-ink-700">/</span> Y {String(cursor.y).padStart(4, '0')}
        </span>
      </div>

      <div className="hud-corner hud-corner-bottom-right">
        <span className="hud-kicker">SCROLL DEPTH</span>
        <span className="hud-value">{String(scrollDepth).padStart(2, '0')}%</span>
        <span className="hud-status">
          <span className="hud-status-dot" />
          SYSTEM: ONLINE <span className="hidden sm:inline">// 60 FPS</span>
        </span>
      </div>

      <aside className="hud-radar pointer-events-auto" aria-label="Level radar">
        <div className="hud-radar-heading">
          <span>LEVEL RADAR</span>
          <span className="hud-radar-line" />
        </div>
        <div className="hud-mission-list">
          {missions.map((mission) => {
            const isActive = activeMission === mission.id
            return (
              <button
                key={mission.id}
                type="button"
                className={`hud-mission ${isActive ? 'is-active' : ''}`}
                onClick={() => jumpToMission(mission.id)}
                aria-label={`Scroll to ${mission.label}`}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="hud-mission-code">{mission.code}</span>
                <span className="hud-mission-dot" />
                <span className="hud-mission-label">{mission.label}</span>
              </button>
            )
          })}
        </div>
      </aside>
    </div>
  )
}