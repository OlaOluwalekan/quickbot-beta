import { addConversationId, toggleMobileNav } from '@/features/generalSlice'
import { deleteConversation } from '@/utils/actions/conversation'
import clsx from 'clsx'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
  FaDotCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa'
import { useDispatch } from 'react-redux'

interface conversationProps {
  title: string
  id: string
}

const Conversation = ({ title, id }: conversationProps) => {
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useDispatch()

  return (
    <div>
      <div
        className={clsx(
          'my-1 w-full flex items-center justify-between gap-5 hover:bg-accent',
          window.location.pathname.split('/').pop() === id ? 'bg-accent' : ''
        )}
      >
        <Link
          href={`/chat/${id}`}
          className='whitespace-nowrap overflow-auto leading-10 px-2'
          onClick={() => {
            dispatch(toggleMobileNav(false))
            dispatch(addConversationId(id))
          }}
        >
          {title}
        </Link>
        <span className='cursor-pointer' onClick={() => setShowPopup(true)}>
          <BsThreeDotsVertical />
        </span>
      </div>
      {showPopup && (
        <div className='absolute top-0 left-0 w-screen h-screen bg-overlay flex justify-center items-center z-30'>
          <div className='w-[90%] max-w-[400px] rounded-lg relative py-10 flex flex-col items-center bg-primary'>
            <span
              className='absolute top-3 right-3 cursor-pointer'
              onClick={() => setShowPopup(false)}
            >
              <FaTimesCircle />
            </span>
            <p className='w-[80%] text-center'>
              Delete <span className='text-accent-content'>{title}</span>?
            </p>
            <p className='flex items-center gap-3 my-3'>
              <span className='text-[yellow]'>
                <FaExclamationTriangle />
              </span>{' '}
              This action cannot be undone
            </p>
            <article className='flex justify-end w-[80%]'>
              <button className='px-5 py-2' onClick={() => setShowPopup(false)}>
                Cancel
              </button>
              <button
                className='bg-alert-error px-5 py-2 rounded'
                onClick={() => deleteConversation(id)}
              >
                Delete
              </button>
            </article>
          </div>
        </div>
      )}
    </div>
  )
}

export default Conversation
