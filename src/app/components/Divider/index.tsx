import type { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  color?: string
  size?: '1' | '2' | '4' | '8'
  orientation?: 'horizontal' | 'vertical'
}

const Divider = ({
  color = '#6f7d90',
  size = '1',
  orientation = 'horizontal',
  className,
  ...props
}: DividerProps) => {
  const sizeClass =
    orientation === 'horizontal'
      ? { '1': 'h-px', '2': 'h-0.5', '4': 'h-1', '8': 'h-2' }[size]
      : { '1': 'w-px', '2': 'w-0.5', '4': 'w-1', '8': 'w-2' }[size]

  const dimensionClass = orientation === 'horizontal' ? 'w-full' : 'h-full'

  const style = { backgroundColor: color }

  const classes = twMerge(sizeClass, dimensionClass, className)

  return (
    <div
      tabIndex={0}
      style={style}
      role="separator"
      className={classes}
      aria-orientation={orientation}
      {...props}
    />
  )
}

export default Divider
