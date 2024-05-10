'use client'

import {
  FaEnvelope,
  FaExclamationTriangle,
  FaTimesCircle,
  FaUser,
} from 'react-icons/fa'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaKey } from 'react-icons/fa6'
import Button from '../ui/buttons/Button'
import { register } from '@/utils/actions/auth'
import { useState, useTransition } from 'react'
import clsx from 'clsx'
import { IoCheckmarkDoneCircle } from 'react-icons/io5'
import Alert from '../alert/Alert'

interface respType {
  message: string
  success: boolean
}

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition()
  const [response, setResponse] = useState<respType>({
    message: '',
    success: false,
  })

  const handleSubmit = (formData: FormData) => {
    setResponse({ message: '', success: false })

    startTransition(() => {
      register(formData).then((res) => {
        setResponse(res)
      })
    })
  }

  return (
    <form action={handleSubmit}>
      <InputWithIcon
        type='email'
        placeholder='Email'
        icons={<FaEnvelope />}
        name='email'
        id='email'
      />
      <InputWithIcon
        type='text'
        placeholder='Name'
        icons={<FaUser />}
        name='name'
        id='id'
      />
      <InputWithIcon
        type='password'
        placeholder='Password'
        icons={<FaKey />}
        name='password'
        id='password'
      />
      <InputWithIcon
        type='password'
        placeholder='Confirm Password'
        icons={<FaKey />}
        name='confirm'
        id='confirm'
      />
      {response.message && (
        <Alert message={response.message} success={response.success} />
      )}
      <Button type='submit' size='full' text='Register' />
    </form>
  )
}

export default RegisterForm
