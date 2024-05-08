'use client'

import { useRef } from 'react'

const ChatInput = () => {
  const textRef = useRef<HTMLTextAreaElement>(null)
  const handleChange = () => {
    if (textRef.current) {
      textRef.current.style.height = '48px'
      textRef.current.style.height = `${textRef.current.scrollHeight}px`
      if (textRef.current.scrollHeight > 48) {
        textRef.current.style.lineHeight = '20px'
      }
    }
    console.log(textRef.current?.scrollHeight, textRef.current?.style.height)
  }

  return (
    <div className='w-[90%] py-3'>
      <textarea
        onChange={handleChange}
        ref={textRef}
        name='question'
        id='question'
        rows={1}
        placeholder='Ask Quick'
        className='w-full resize-none h-[48px] max-h-[200px] overflow-y-auto text-base  py-3 pl-3 pr-8 rounded-lg'
      ></textarea>
    </div>
  )
}

export default ChatInput
