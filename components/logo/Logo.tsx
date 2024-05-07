import clsx from 'clsx'
import Image from 'next/image'

const Logo = ({
  size,
}: {
  size?: 'icon' | 'text' | 'small' | 'normal' | 'medium' | 'large'
}) => {
  const sizeClass = clsx({
    'w-4': size === 'text',
    'w-8': size === 'small',
    'w-10': size === 'icon',
    'w-20': size === 'normal',
    'w-32': size === 'medium',
    'w-72': size === 'large',
  })

  return (
    <Image
      src='/quick-logo.png'
      alt='Quick Logo'
      width='290'
      height='119'
      className={clsx(sizeClass)}
    />
  )
}

export default Logo
