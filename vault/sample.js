const chat = {
  id: '664380826fdb50c988ee8825',
  conversationId: '6643807b6fdb50c988ee8824',
  question: 'Can you give me the brief steps to create a next js application?',
  response: "**Next.js Application Creation Steps:**\n'",
  createdAt: '2024-05-14T15:17:22.568Z',
}

const node = {
  type: 'element',
  tagName: 'p',
  properties: {},
  children: [
    {
      type: 'text',
      value:
        'Now, your component will display the formatted date and time in a readable format.',
      position: {
        start: { line: 81, column: 1, offset: 3060 },
        end: { line: 81, column: 83, offset: 3142 },
      },
    },
  ],
  position: {
    start: { line: 81, column: 1, offset: 3060 },
    end: { line: 81, column: 83, offset: 3142 },
  },
}

;('use client')

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

const VerificationForm = () => {
  const [count, setCount] = useState(0)

  const handleResendClick = () => {
    setCount(10)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('link sent')
  }

  useEffect(() => {
    let interval
    if (count > 0) {
      interval = setInterval(() => {
        setCount(count - 1)
      }, 1000)
    } else {
      setCount(0)
      clearInterval(interval)
    }
  }, [count])

  return (
    <div className='h-screen flex flex-col justify-center items-center gap-2'>
      <form action={handleSubmit}>
        <Button
          type='submit'
          size='large'
          text={count > 0 ? `Resend link in ${count} seconds` : 'Resend link'}
          disabled={count > 0}
          handleClick={handleResendClick}
        />
      </form>
    </div>
  )
}

export default VerificationForm
