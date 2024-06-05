'use client'

import UserProfile from './UserProfile'
import { FaEdit } from 'react-icons/fa'
import Link from 'next/link'
import ConversationList from './ConversationList'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileNav } from '@/features/generalSlice'
import { RootState } from '@/store'
import ConversationMenu from './ConversationMenu'

const NavDiv = () => {
  const dispatch = useDispatch()
  const { conversationMenuIsOpen } = useSelector(
    (store: RootState) => store.general
  )

  return (
    <div className='h-full w-[300px] relative flex flex-col'>
      <div className='w-full p-2'>
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
      </div>
      <ConversationList />
      {conversationMenuIsOpen && <ConversationMenu />}
      <UserProfile />
    </div>
  )
}

export default NavDiv
