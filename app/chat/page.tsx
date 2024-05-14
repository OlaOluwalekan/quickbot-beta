import { auth } from '@/auth'
import Logout from '@/components/auth/Logout'
import React from 'react'

const ChatPage = async () => {
  const session = await auth()

  return <div>ChatPage</div>
}

export default ChatPage
