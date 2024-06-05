import { addConversationId } from '@/features/generalSlice'
import { deleteConversation } from '@/utils/actions/conversation'
import { FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa'
import { useDispatch } from 'react-redux'

const DeletePopup = ({ title, id }: { id: string; title: string }) => {
  const dispatch = useDispatch()

  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-overlay flex justify-center items-center z-30'>
      <div className='w-[90%] max-w-[400px] rounded-lg relative py-10 flex flex-col items-center bg-primary'>
        <span
          className='absolute top-3 right-3 cursor-pointer'
          onClick={() => {
            // setShowPopup(false)
          }}
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
          <button
            className='px-5 py-2'
            onClick={() => {
              // setShowPopup(false)
            }}
          >
            Cancel
          </button>
          <button
            className='bg-alert-error px-5 py-2 rounded'
            onClick={() => {
              deleteConversation(id)
              dispatch(addConversationId(id))
              //   setShowPopup(false)
            }}
          >
            Delete
          </button>
        </article>
      </div>
    </div>
  )
}

export default DeletePopup
