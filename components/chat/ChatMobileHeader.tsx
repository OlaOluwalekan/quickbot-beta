import React from 'react'
import { FaBars } from 'react-icons/fa6'
import Logo from '../logo/Logo'

const ChatMobileHeader = () => {
  return (
    <header className='navbar border-b-[1px] bg-primary text-primary-content border-neutral md:hidden'>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <FaBars />
        </button>
      </div>
      <div className='flex-1'>
        <h2 className='btn btn-ghost text-xl'>Chat Title</h2>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <Logo size='normal' />
        </button>
      </div>
    </header>
  )
}

export default ChatMobileHeader
