import {
  addConversationId,
  changeConversationMenuClass,
  toggleConversationMenu,
  toggleMobileNav,
} from '@/features/generalSlice'
import { RootState } from '@/store'
import { deleteConversation } from '@/utils/actions/conversation'
import clsx from 'clsx'
import Link from 'next/link'
import { MouseEvent, useEffect, useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import {
  FaDotCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import ConversationMenu from './ConversationMenu'

interface conversationProps {
  title: string
  id: string
}

const Conversation = ({ title, id }: conversationProps) => {
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useDispatch()
  const { conversationMenuIsOpen } = useSelector(
    (store: RootState) => store.general
  )

  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    dispatch(toggleConversationMenu(!conversationMenuIsOpen))
    const target = e.currentTarget.getBoundingClientRect()
    dispatch(changeConversationMenuClass(target.top))
    // console.log(target.top, target.right)
  }

  return (
    <div className='w-full px-2'>
      <div
        className={clsx(
          'w-full flex items-center justify-between gap-5 hover:bg-accent pl-2',
          window.location.pathname.split('/').pop() === id ? 'bg-accent' : ''
        )}
      >
        <Link
          href={`/chat/${id}`}
          className='whitespace-nowrap overflow-auto py-2'
          onClick={() => {
            dispatch(toggleMobileNav(false))
            dispatch(addConversationId(id))
          }}
        >
          {title}
        </Link>
        <span className='cursor-pointer' onClick={handleClick}>
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  )
}

export default Conversation
