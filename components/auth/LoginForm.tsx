import { FaEnvelope } from 'react-icons/fa'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaKey } from 'react-icons/fa6'
import Button from '../ui/buttons/Button'

const LoginForm = () => {
  return (
    <form>
      <InputWithIcon type='email' placeholder='Email' icons={<FaEnvelope />} />
      <InputWithIcon type='password' placeholder='Password' icons={<FaKey />} />
      <Button type='submit' size='full' text='Login' />
    </form>
  )
}

export default LoginForm
