import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const defaultClasses =
  'uppercase font-Space_Grotesk cursor-pointer transition-colors duration-300 hover:text-blue'

export const Button = ({
  children,
  type = 'button',
  className,
  ...rest
}: ButtonProps) => {
  const mergedClasses = `${defaultClasses} ${className || ''}`.trim()

  return (
    <button type={type} className={mergedClasses} {...rest}>
      {children}
      <span className="block w-full h-[2px] bg-blue mt-1" />
    </button>
  )
}
