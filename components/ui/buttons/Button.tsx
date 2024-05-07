import clsx from 'clsx'
import { ReactNode } from 'react'

interface buttonProps {
  type: 'submit' | 'button' | 'reset'
  hasIcon?: boolean
  icon?: ReactNode
  size: 'small' | 'medium' | 'large' | 'full'
}
const Button = ({ type, hasIcon, icon, size }: buttonProps) => {
  const sizeClass = clsx({
    'w-[100px]': size === 'small',
    'w-[150px]': size === 'medium',
    'w-[300px]': size === 'large',
    'w-full': size === 'full',
  })
  return (
    <button className={clsx('btn btn-primary', sizeClass)} type={type}>
      {hasIcon && icon}
      Button
    </button>
  )
}

export default Button
