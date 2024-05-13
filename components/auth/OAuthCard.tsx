'use client'

import { FcGoogle } from 'react-icons/fc'
import Button from '../ui/buttons/Button'
import { FaGithub, FaTwitter } from 'react-icons/fa6'
import { signIn } from 'next-auth/react'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes-deff'

const OAuthCard = () => {
  const handleClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    })
  }

  return (
    <div className='flex justify-center items-center gap-5'>
      <Button
        type='button'
        size='square'
        hasIcon={true}
        icon={<FcGoogle />}
        iconSize='text-5xl'
        bg='bg-base-100'
        handleClick={() => handleClick('google')}
      />
      <Button
        type='button'
        size='square'
        hasIcon={true}
        icon={<FaGithub />}
        iconSize='text-5xl'
        bg='bg-base-100'
        handleClick={() => handleClick('github')}
      />
    </div>
  )
}

export default OAuthCard
