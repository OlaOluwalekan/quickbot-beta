'use client'

import { FaEnvelope } from 'react-icons/fa'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaKey } from 'react-icons/fa6'
import Button from '../ui/buttons/Button'
import {
  ChangeEvent,
  FormEvent,
  ReactEventHandler,
  useState,
  useTransition,
} from 'react'
import { login } from '@/utils/actions/login'
import Alert from '../alert/Alert'
import { useRouter } from 'next/navigation'

interface respType {
  message: string
  success: boolean
}

const LoginForm = () => {
  const [isPending, startTransition] = useTransition()
  const [response, setResponse] = useState<respType>({
    message: '',
    success: false,
  })
  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    setResponse({ message: '', success: false })

    startTransition(() => {
      login(formData).then((res) => {
        setResponse(res)
        if (res.success) {
          router.push('/chat')
        }
      })
    })
  }

  return (
    <form action={handleSubmit} noValidate>
      <InputWithIcon
        type='email'
        placeholder='Email'
        icons={<FaEnvelope />}
        name='email'
        id='email'
      />
      <InputWithIcon
        type='password'
        placeholder='Password'
        icons={<FaKey />}
        name='password'
        id='password'
      />
      {response.message && (
        <Alert message={response.message} success={response.success} />
      )}
      <Button
        type='submit'
        size='full'
        text={isPending ? 'Loading' : 'Login'}
        disabled={isPending}
      />
    </form>
  )
}

export default LoginForm
