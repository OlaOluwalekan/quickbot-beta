import { ReactNode } from 'react'
import Logo from '../logo/Logo'

const DesktopHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full flex flex-col items-center bg-primary'>
      <header className='hidden text-primary-content md:flex justify-between items-center w-[90%] mx-auto py-4'>
        <h1 className='text-xl font-bold'>Chat Name</h1>
        <Logo size='normal' />
      </header>
      {children}
      <footer className='hidden md:flex h-2'></footer>
    </div>
  )
}

export default DesktopHeader
