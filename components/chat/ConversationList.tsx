'use client'

import { getConversations } from '@/utils/actions/conversation'
import { useSession } from 'next-auth/react'
import { useEffect, useState, useTransition } from 'react'
import Conversation from './Conversation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'

const ConversationList = () => {
  const session = useSession()
  const [isPending, startTransition] = useTransition()
  const [conversations, setConversations] = useState<any>([])
  const { conversationIds } = useSelector((store: RootState) => store.general)

  useEffect(() => {
    const storedConversation =
      JSON.parse(localStorage.getItem('conversations') as string) || []
    setConversations(storedConversation)
  }, [])

  useEffect(() => {
    if (session.data) {
      startTransition(async () => {
        const res = await getConversations(session?.data?.user?.id as string)
        localStorage.setItem('conversations', JSON.stringify(res))
        setConversations(res)
      })
    }
  }, [session, conversationIds])

  if (isPending && conversations.length === 0) {
    return (
      <div className='flex-grow flex justify-center items-center'>
        Nothing here yet...
      </div>
    )
  }

  return (
    <div className='flex-grow w-full overflow-hidden'>
      {conversations.map((conversation: any) => {
        return <Conversation key={conversation.id} {...conversation} />
      })}
    </div>
  )
}

export default ConversationList
