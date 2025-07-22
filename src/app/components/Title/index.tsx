export type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
}

export default function SectionTitle({
  title,
  subtitle,
  align = 'center',
}: SectionTitleProps) {
  const firstLetter = title.charAt(0)
  const restOfTitle = title.slice(1)

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const flexAlignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }

  const subtitleAlignmentClasses = {
    left: 'mx-0',
    center: 'mx-auto',
    right: 'ml-auto mr-0',
  }

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      <h2 className="relative inline-block text-4xl md:text-6xl font-bold">
        <span className="text-blue relative z-10">{firstLetter}</span>
        <span className="text-gray-100">{restOfTitle}</span>

        <span
          aria-hidden="true"
          className="absolute -top-2 -left-2 w-12 h-12 bg-blue/10 rounded-full blur-md z-0"
        />
      </h2>

      <div className={`mt-2 flex ${flexAlignmentClasses[align]}`}>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue to-transparent" />
      </div>

      {subtitle && (
        <p
          className={`text-gray-300 mt-4 max-w-lg ${subtitleAlignmentClasses[align]}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
