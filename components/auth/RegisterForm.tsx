import { FaEnvelope, FaUser } from 'react-icons/fa'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaKey } from 'react-icons/fa6'
import Button from '../ui/buttons/Button'

const RegisterForm = () => {
  return (
    <form>
      <InputWithIcon type='email' placeholder='Email' icons={<FaEnvelope />} />
      <InputWithIcon type='text' placeholder='Name' icons={<FaUser />} />
      <InputWithIcon type='password' placeholder='Password' icons={<FaKey />} />
      <InputWithIcon
        type='password'
        placeholder='Confirm Password'
        icons={<FaKey />}
      />
      <Button type='submit' size='full' />
    </form>
  )
}

export default RegisterForm
