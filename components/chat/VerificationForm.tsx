'use client'

import { verifyUser } from '@/utils/actions/verify'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'
import InlineLoading from '../ui/loading/InlineLoading'
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import clsx from 'clsx'
import BasicInput from '../ui/inputs/BasicInput'
import InputWithIcon from '../ui/inputs/InputWithIcon'
import { FaEnvelope } from 'react-icons/fa6'
import LinkBtn from '../ui/buttons/LinkBtn'
import Button from '../ui/buttons/Button'
import { sendVerificationEmail } from '@/utils/emails/verificationEmail'
import { generateVerificationToken } from '@/utils/actions/token'
import { resendEmail } from '@/utils/actions/resend-email'

const VerificationForm = () => {
  const params = useSearchParams()
  const token = params.get('token')
  const [isPending, startTransition] = useTransition()
  const [response, setResponse] = useState<{
    message: string
    success: boolean
    email: string | null | undefined
  }>({ message: '', success: false, email: null })
  const [isWaiting, setIsWaiting] = useState(false)
  const [count, setCount] = useState(0)

  //   console.log(token)
  useEffect(() => {
    setResponse({ message: '', success: false, email: null })
    startTransition(() => {
      verifyUser(token as string).then((res) => {
        console.log(res)
        setResponse(res)
      })
    })
  }, [])

  const handleResendClick = () => {
    // setIsWaiting(true)
    setCount(10)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined
    if (count > 0) {
      interval = setInterval(() => {
        setCount(count - 1)
      }, 1000)
      //   setTimeout(() => {
      //     setIsWaiting(false)
      //   }, 10000)
    } else {
      //   setCount(0)
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [count])

  const handleSubmit = (formData: FormData) => {
    resendEmail(formData).then((res) => {
      handleResendClick()
    })

    // startTransition(() => {
    //   generateVerificationToken(response.email as string).then((res) => {
    //     // sendVerificationEmail(response.email as string, res.token)
    //     console.log(res)
    //   })
    // })
  }

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2'>
      {isPending && <InlineLoading />}
      {!isPending && (
        <div
          className={clsx(
            'flex items-center gap-3 px-5 py-1 rounded-lg',
            response.success ? 'bg-alert-success' : 'bg-alert-error/65'
          )}
        >
          <span
            className={clsx(
              response.success ? 'text-primary-content' : 'text-alert-error'
            )}
          >
            {response.success ? <FaCheckCircle /> : <FaTimesCircle />}
          </span>
          <p
            className={clsx(
              response.success ? 'text-primary-content' : 'text-alert-error'
            )}
          >
            {response.message}
          </p>
        </div>
      )}
      {!isPending && response.message.includes('expired') && (
        <form action={handleSubmit}>
          {response.email && (
            <InputWithIcon
              type='hidden'
              placeholder='Email'
              name='email'
              id='email'
              icons={<FaEnvelope />}
              isControlled={true}
              value={response.email}
            />
          )}
          <Button
            type='submit'
            size='large'
            text={count > 0 ? `Resend link in ${count} seconds` : 'Resend link'}
            disabled={count > 0}
            // handleClick={handleResendClick}
          />
        </form>
      )}
      {!isPending && !response.success && (
        <div>
          <LinkBtn href='/' text='Back Home' />
        </div>
      )}
      {response.success && (
        <div>
          <LinkBtn href='/chat' text='Go to chat' />
        </div>
      )}
    </div>
  )
}

export default VerificationForm
