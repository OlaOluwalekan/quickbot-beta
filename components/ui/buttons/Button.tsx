import clsx from 'clsx'
import { ReactNode } from 'react'

interface buttonProps {
  type: 'submit' | 'button' | 'reset'
  hasIcon?: boolean
  icon?: ReactNode
  size: 'small' | 'medium' | 'large' | 'full' | 'square'
  text?: string
  iconSize?: string
  bg?: string
  disabled?: boolean
}
const Button = ({
  type,
  hasIcon,
  icon,
  size,
  text,
  iconSize,
  bg = 'btn-primary',
  disabled = false,
}: buttonProps) => {
  const sizeClass = clsx({
    'w-[100px]': size === 'small',
    'w-[150px]': size === 'medium',
    'w-[300px]': size === 'large',
    'w-full': size === 'full',
    'w-[70px] h-[70px]': size === 'square',
  })
  return (
    <button
      className={clsx('btn', bg, sizeClass, disabled && 'cursor-not-allowed')}
      type={type}
      disabled={disabled}
    >
      {hasIcon && <span className={clsx(iconSize)}>{icon}</span>}
      {text}
    </button>
  )
}

export default Button
