interface inputProps {
  type: string
  placeholder: string
}

const BasicInput = ({ type, placeholder }: inputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className='input input-bordered w-full max-w-xs'
    />
  )
}

export default BasicInput
