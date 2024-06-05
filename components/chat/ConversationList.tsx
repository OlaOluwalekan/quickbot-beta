'use client'

import { getConversations } from '@/utils/actions/conversation'
import { useSession } from 'next-auth/react'
import { useEffect, useState, useTransition } from 'react'
import Conversation from './Conversation'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import ConversationMenu from './ConversationMenu'

const ConversationList = () => {
  const session = useSession()
  const [isPending, startTransition] = useTransition()
  const [conversations, setConversations] = useState<any>([])
  const { conversationIds, conversationMenuIsOpen } = useSelector(
    (store: RootState) => store.general
  )

  useEffect(() => {
    const rawConversations = localStorage.getItem('conversations') || '[]'
    console.log('RAW: ', rawConversations)

    const storedConversation = JSON.parse(rawConversations) || []
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
    <div className='flex-grow relative overflow-hidden flex justify-center items-center'>
      <div className='h-[calc(100vh-120px)] w-300px overflow-auto'>
        {conversations.map((conversation: any) => {
          return <Conversation key={conversation.id} {...conversation} />
        })}
      </div>
      {/* {conversationMenuIsOpen && <ConversationMenu />} */}
    </div>
  )
}

export default ConversationList
