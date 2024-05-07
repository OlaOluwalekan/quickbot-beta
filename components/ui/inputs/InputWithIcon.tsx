import { ReactNode } from 'react'

interface inputProps {
  type: string
  placeholder: string
  icons: ReactNode
}

const InputWithIcon = ({ type, placeholder, icons }: inputProps) => {
  return (
    <label className='input input-bordered flex items-center gap-2 my-2'>
      <span className='input-icon text-primary'>{icons}</span>
      <input type={type} className='grow' placeholder={placeholder} />
    </label>
  )
}

export default InputWithIcon
