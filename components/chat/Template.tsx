'use client'

import { addConversationId, toggleLoading } from '@/features/generalSlice'
import { createChat } from '@/utils/actions/chat'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { useDispatch } from 'react-redux'

const Template = ({ text, userId }: { text: string; userId: string }) => {
  const dispatch = useDispatch()
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleClick = (formData: FormData) => {
    dispatch(toggleLoading(true))
    startTransition(() => {
      createChat(formData, window.location.pathname).then((res) => {
        if (res.success) {
          dispatch(addConversationId(res.data.conversationId))
        }
        if (res?.data.conversationId && window.location.pathname === '/chat') {
          router.push(`/chat/${res.data.conversationId}`)
        }
        dispatch(toggleLoading(false))
      })
    })
  }

  return (
    <form
      className='w-[140px] h-[80px] flex justify-center items-center border-2 border-primary text-center rounded-lg text-sm hover:bg-primary hover:text-primary-content'
      action={handleClick}
    >
      <input type='hidden' id='id' name='id' value={userId} />
      <input type='hidden' name='question' id='question' value={text} />
      <button className='w-[90%]'>{text}</button>
    </form>
  )
}

export default Template
