interface SectionHeadingProps {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="heading-2 mt-3 text-white text-balance">{title}</h2>
      {description && <p className="prose-muted mt-4 text-pretty">{description}</p>}
    </div>
  )
}
