import { useEffect, useRef, useState } from 'react'
import { Activity, ArrowUpRight, X } from 'lucide-react'

type DeepScanInspectorProps = {
  className?: string
  compact?: boolean
}

export default function DeepScanInspector({ className = '', compact = false }: DeepScanInspectorProps) {
  const [open, setOpen] = useState(false)
  const [count, setCount] = useState(0)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const wasOpen = useRef(false)

  useEffect(() => {
    if (!open) {
      if (wasOpen.current) triggerRef.current?.focus()
      wasOpen.current = false
      return
    }
    wasOpen.current = true
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.stopPropagation()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const target = dialogRef.current?.querySelector<HTMLElement>('[data-scan-counter]')
    if (!target) return
    observerRef.current?.disconnect()
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observerRef.current?.disconnect()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(100)
        return
      }
      const start = performance.now()
      const duration = 1050
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1)
        setCount(Math.round(100 * (1 - Math.pow(1 - progress, 3))))
        if (progress < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.35 })
    observerRef.current.observe(target)
    return () => observerRef.current?.disconnect()
  }, [open])

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`deep-scan-trigger ${className}`}
        onClick={() => {
          setCount(0)
          setOpen(true)
        }}
        aria-haspopup="dialog"
        aria-label="Open Deep Scan technical inspection sample"
      >
        <Activity className="h-3.5 w-3.5" aria-hidden="true" />
        {compact ? 'Inspect Deep Scan' : 'Open Deep Scan'}
        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
      </button>
      {open && (
        <div
          className="scan-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setOpen(false)
          }}
        >
          <div
            ref={dialogRef}
            className="scan-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="deep-scan-title"
            aria-describedby="deep-scan-sample-disclaimer"
            tabIndex={-1}
          >
            <header className="scan-header">
              <div>
                <div className="scan-kicker">NEXBUILD / SYSTEM INSPECTION · SAMPLE 01</div>
                <h2 id="deep-scan-title" className="mt-2 font-display text-2xl font-semibold text-white sm:text-3xl">
                  Deep Scan
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-400">
                  A closer look at the product architecture, interfaces, and delivery system behind the work.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="scan-close"
                onClick={() => setOpen(false)}
                aria-label="Close Deep Scan inspection"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </header>
            <div className="scan-body">
              <div className="scan-blueprint" aria-label="Illustrative system architecture schematic">
                <svg viewBox="0 0 560 300" role="img" aria-labelledby="scan-blueprint-title">
                  <title id="scan-blueprint-title">Illustrative architecture linking interface, services, data, and delivery</title>
                  <ellipse className="scan-orbit" cx="280" cy="150" rx="178" ry="102" />
                  <path className="scan-link" d="M280 150 L110 72 M280 150 L450 72 M280 150 L110 228 M280 150 L450 228" />
                  <g className="scan-node" transform="translate(45 48)">
                    <rect width="130" height="48" rx="6" />
                    <circle cx="14" cy="15" r="3" />
                    <text x="25" y="18">01 / EXPERIENCE</text>
                    <text x="14" y="35">WEB · MOBILE · ACCESS</text>
                  </g>
                  <g className="scan-node" transform="translate(385 48)">
                    <rect width="130" height="48" rx="6" />
                    <circle cx="14" cy="15" r="3" />
                    <text x="25" y="18">02 / SERVICES</text>
                    <text x="14" y="35">API · WORKFLOWS</text>
                  </g>
                  <g className="scan-node" transform="translate(45 204)">
                    <rect width="130" height="48" rx="6" />
                    <circle cx="14" cy="15" r="3" />
                    <text x="25" y="18">03 / DATA</text>
                    <text x="14" y="35">MODELS · SIGNALS</text>
                  </g>
                  <g className="scan-node" transform="translate(385 204)">
                    <rect width="130" height="48" rx="6" />
                    <circle cx="14" cy="15" r="3" />
                    <text x="25" y="18">04 / DELIVERY</text>
                    <text x="14" y="35">TEST · RELEASE</text>
                  </g>
                  <g className="scan-node" transform="translate(215 126)">
                    <rect width="130" height="48" rx="8" />
                    <circle cx="16" cy="17" r="4" />
                    <text x="29" y="20">NEXBUILD CORE</text>
                    <text x="16" y="37">STRATEGY × CRAFT</text>
                  </g>
                </svg>
              </div>
              <div className="scan-metrics" data-scan-counter>
                <div className="scan-metric">
                  <div className="scan-kicker">SURFACE AREA / SAMPLE</div>
                  <div className="scan-metric-value" aria-label="100 plus illustrative files">{count}+<span className="text-2xl text-brand-400"> files</span></div>
                  <p className="scan-metric-label">Illustrative files mapped across interface, service, and delivery layers.</p>
                </div>
                <div className="scan-metric">
                  <div className="scan-kicker">SIGNAL ALIGNMENT / SAMPLE</div>
                  <div className="scan-metric-value">{Math.round(count * 0.85)}<span className="text-2xl text-brand-400">%</span></div>
                  <p className="scan-metric-label">Illustrative confidence score for this sample architecture view.</p>
                </div>
              </div>
              <p id="deep-scan-sample-disclaimer" className="scan-sample-note">
                <strong>Illustrative sample only.</strong> This blueprint and the 100+ files / 85% values are a client-side visual demo—not a real scan, audit, or measured client data.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}