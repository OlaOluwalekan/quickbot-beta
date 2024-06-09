import clsx from 'clsx'
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
  readonly?: boolean
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
  readonly,
}: inputProps) => {
  return (
    <label
      className={clsx(
        'input input-bordered flex items-center gap-2 my-2',
        type === 'hidden' && 'hidden'
      )}
    >
      <span className='input-icon text-primary'>{icons}</span>
      <input
        type={type}
        className='grow'
        placeholder={placeholder}
        name={name}
        id={id}
        value={isControlled ? value : undefined}
        onChange={onchange}
        readOnly={readonly}
      />
    </label>
  )
}

export default InputWithIcon
