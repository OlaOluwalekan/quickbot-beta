import { ReactEventHandler, ReactNode } from 'react'

interface inputProps {
  type: string
  placeholder: string
  icons: ReactNode
  name?: string
  id?: string
  isControlled?: boolean
  value?: string
  onchange?: ReactEventHandler<HTMLInputElement>
}

const InputWithIcon = ({
  type,
  placeholder,
  icons,
  name,
  id,
  isControlled,
  value,
  onchange,
}: inputProps) => {
  return (
    <label className='input input-bordered flex items-center gap-2 my-2'>
      <span className='input-icon text-primary'>{icons}</span>
      <input
        type={type}
        className='grow'
        placeholder={placeholder}
        name={name}
        id={id}
        value={isControlled ? value : undefined}
        onChange={onchange}
      />
    </label>
  )
}

export default InputWithIcon
