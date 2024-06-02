'use client'

import { useEffect, useRef } from 'react'
import Chat from './Chat'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import InlineLoading from '../ui/loading/InlineLoading'

interface chatProp {
  id: string
  question: string
  response: string
  createdAt: string
}

const ChatList = ({ data }: { data: chatProp[] }) => {
  const bottomRef = useRef<HTMLDivElement | null>(null)
  const { isLoading } = useSelector((store: RootState) => store.general)

  // Scroll to the bottom when items change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [data])

  useEffect(() => {
    if (isLoading) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [isLoading])

  return (
    <div className='overflow-auto h-full py-10'>
      {data.map((item: chatProp) => {
        return <Chat key={item.id} {...item} />
      })}

      {isLoading && <InlineLoading />}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatList
