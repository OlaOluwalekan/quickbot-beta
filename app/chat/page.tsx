import { auth } from '@/auth'
import Logout from '@/components/auth/Logout'
import React from 'react'

const ChatPage = async () => {
  const session = await auth()

  return (
    <div>
      ChatPage
      <p className='w-[300px] overflow-hidden'>{JSON.stringify(session)}</p>
      <Logout />
    </div>
  )
}

export default ChatPage
