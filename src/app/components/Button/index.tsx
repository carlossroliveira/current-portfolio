import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button = ({ children, type = 'button' }: ButtonProps) => {
  return (
    <button
      type={type}
      className="uppercase font-Space_Grotesk cursor-pointer transition-colors duration-300 hover:text-blue"
    >
      {children}
      <span className="block w-full h-[2px] bg-blue mt-1" />
    </button>
  )
}

export default Button
