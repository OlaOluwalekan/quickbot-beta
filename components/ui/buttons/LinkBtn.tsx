import Link from 'next/link'

interface BtnProps {
  href: string
  hasIcon?: boolean
  text: string
}

const LinkBtn = ({ href, hasIcon, text }: BtnProps) => {
  return (
    <Link href={href} className='btn btn-primary'>
      {text}
    </Link>
  )
}

export default LinkBtn
