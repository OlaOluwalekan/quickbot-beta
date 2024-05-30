'use client'

import UserProfile from './UserProfile'
import { FaEdit } from 'react-icons/fa'
import Link from 'next/link'
import ConversationList from './ConversationList'
import { useDispatch } from 'react-redux'
import { toggleMobileNav } from '@/features/generalSlice'

const NavDiv = () => {
  const dispatch = useDispatch()

  return (
    <div className='h-full w-full px-2 py-2 flex flex-col'>
      <Link
        href='/chat'
        className='flex justify-between items-center px-2 py-2 cursor-pointer hover:bg-accent rounded-sm'
        onClick={() => dispatch(toggleMobileNav(false))}
      >
        <span>New Chat</span>
        <span>
          <FaEdit />
        </span>
      </Link>
      <ConversationList />
      <UserProfile />
    </div>
  )
}

export default NavDiv
