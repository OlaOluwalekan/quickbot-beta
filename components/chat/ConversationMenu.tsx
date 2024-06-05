import { RootState } from '@/store'
import clsx from 'clsx'
import { useEffect } from 'react'
import { FaPenAlt } from 'react-icons/fa'
import { FaTrash } from 'react-icons/fa6'
import { useSelector } from 'react-redux'

const ConversationMenu = () => {
  const { conversationMenuClass } = useSelector(
    (store: RootState) => store.general
  )

  useEffect(() => {
    console.log(`top-[${parseInt(conversationMenuClass)}px]`)
  }, [conversationMenuClass])

  return (
    <div
      className={`absolute right-[-130px] z-50 top-[${parseInt(
        conversationMenuClass
      )}px] bg-primary shadow-xl rounded-lg w-36`}
      style={{
        top: `${parseInt(conversationMenuClass) + 10}px`,
      }}
    >
      <ul className='menu rounded-box'>
        <li>
          <a>
            <FaPenAlt />
            Rename
          </a>
        </li>
        <li>
          <a>
            <FaTrash />
            Delete
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ConversationMenu
