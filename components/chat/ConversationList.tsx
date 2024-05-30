'use client'

import { getConversations } from '@/utils/actions/conversation'
import { useSession } from 'next-auth/react'
import { useEffect, useState, useTransition } from 'react'
import Conversation from './Conversation'

const ConversationList = () => {
  const session = useSession()
  const [isPending, startTransition] = useTransition()
  const [conversations, setConversations] = useState<any>([])

  console.log(session)

  useEffect(() => {
    startTransition(async () => {
      if (session.data) {
        const res = await getConversations(session?.data?.user?.id as string)
        setConversations(res)
      }
    })
  }, [session])

  //   useEffect(() => {
  //     console.log(conversations)
  //   }, [conversations])

  if (isPending) {
    return <div className='flex-grow'>Loading...</div>
  }

  return (
    <div className='flex-grow'>
      {conversations.map((conversation: any) => {
        return <Conversation key={conversation.id} {...conversation} />
      })}
    </div>
  )
}

export default ConversationList
