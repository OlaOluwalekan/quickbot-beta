import UserProfile from './UserProfile'
import ChatList from './ChatList'
import { FaEdit } from 'react-icons/fa'
import Link from 'next/link'

const NavDiv = () => {
  return (
    <div className='h-full w-full px-2 py-2 flex flex-col'>
      <Link
        href='/chat'
        className='flex justify-between items-center px-2 py-2 cursor-pointer hover:bg-accent rounded-sm'
      >
        <span>New Chat</span>
        <span>
          <FaEdit />
        </span>
      </Link>
      <ChatList />
      <UserProfile />
    </div>
  )
}

export default NavDiv
