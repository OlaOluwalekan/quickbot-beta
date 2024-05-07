import React, { ReactNode } from 'react'
import Logo from '../logo/Logo'

interface authCardProps {
  children: ReactNode
  page: 'Register' | 'Login'
  headerText: string
}

const AuthCard = ({ children, page, headerText }: authCardProps) => {
  return (
    <div className='card py-6 shadow-xl w-[90%] flex flex-col items-center justify-center md:flex-row'>
      <div className='flex flex-col w-full items-center justify-center'>
        <Logo size='medium' />
        <h2>{page}</h2>
        <p>{headerText}</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div className='w-[90%] max-w-[400px] p-5'>
          {children}
          <section>or login with OAuth</section>
        </div>
      </div>
    </div>
  )
}

export default AuthCard
