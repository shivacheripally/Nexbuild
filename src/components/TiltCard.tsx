import { useState, type CSSProperties, type PointerEvent, type ReactNode } from 'react'

type TiltStyle = CSSProperties & {
  '--tilt-x': string
  '--tilt-y': string
  '--glare-x': string
  '--glare-y': string
}

type TiltCardProps = {
  children: ReactNode
  className?: string
  id?: string
  style?: CSSProperties
}

export default function TiltCard({ children, className = '', id, style }: TiltCardProps) {
  const [tilting, setTilting] = useState(false)
  const [tilt, setTilt] = useState<TiltStyle>({
    '--tilt-x': '0deg',
    '--tilt-y': '0deg',
    '--glare-x': '50%',
    '--glare-y': '50%',
  })

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    setTilt({
      '--tilt-x': `${(0.5 - y) * 7}deg`,
      '--tilt-y': `${(x - 0.5) * 8}deg`,
      '--glare-x': `${x * 100}%`,
      '--glare-y': `${y * 100}%`,
    })
    setTilting(true)
  }

  function resetTilt() {
    setTilting(false)
    setTilt({
      '--tilt-x': '0deg',
      '--tilt-y': '0deg',
      '--glare-x': '50%',
      '--glare-y': '50%',
    })
  }

  return (
    <div className="tilt-shell">
      <div
        id={id}
        className={`tilt-card ${tilting ? 'is-tilting' : ''} ${className}`}
        style={{ ...style, ...tilt }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetTilt}
      >
        {children}
      </div>
    </div>
  )
}