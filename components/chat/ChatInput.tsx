'use client'

import { createChat } from '@/utils/actions/chat'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import { FaPaperPlane } from 'react-icons/fa6'

const ChatInput = ({ userId }: { userId: string }) => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const handleChange = () => {
    if (textRef.current) {
      textRef.current.style.height = '48px'
      textRef.current.style.height = `${textRef.current.scrollHeight}px`
      if (textRef.current.scrollHeight > 48) {
        textRef.current.style.lineHeight = '20px'
      }
    }
    // console.log(textRef.current?.scrollHeight, textRef.current?.style.height)
  }

  const handleSubmit = async (formData: FormData) => {
    // console.log(window.location.pathname)
    startTransition(() => {
      createChat(formData, window.location.pathname).then((res) => {
        console.log(res)
        if (res?.data.conversationId && window.location.pathname === '/chat') {
          router.push(`/chat/${res.data.conversationId}`)
        }
      })
    })
  }

  return (
    <form className='w-[90%] my-3 relative' action={handleSubmit}>
      <input type='hidden' value={userId} id='id' name='id' />
      <textarea
        onChange={handleChange}
        ref={textRef}
        name='question'
        id='question'
        rows={1}
        placeholder='Ask Quick'
        className='w-full resize-none h-[48px] max-h-[200px] overflow-y-auto text-base  py-3 pl-3 pr-8 rounded-lg bg-base-200 border-1 border-primary placeholder:text-base-300'
      ></textarea>
      <button
        type='submit'
        className='absolute top-0 bottom-0 m-auto right-2 bg-primary w-[30px] h-[30px] rounded text-primary-content flex justify-center items-center hover:bg-accent'
      >
        <FaPaperPlane />
      </button>
    </form>
  )
}

export default ChatInput
