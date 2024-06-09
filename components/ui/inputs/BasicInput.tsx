interface inputProps {
  type: string
  placeholder: string
  readonly?: boolean
}

const BasicInput = ({ type, placeholder, readonly }: inputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='input input-bordered w-full max-w-xs'
      readOnly={readonly}
    />
  )
}

export default BasicInput
