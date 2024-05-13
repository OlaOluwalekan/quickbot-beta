import { toggleProfileDialog } from '@/features/generalSlice'
import { RootState } from '@/store'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import ProfileDialog from './ProfileDialog'
import clsx from 'clsx'

const UserProfile = () => {
  const { data, status } = useSession()
  const { profileDialogIsOpen } = useSelector(
    (store: RootState) => store.general
  )
  const dispatch = useDispatch()
  //   console.log('SESSION: ', data, status)
  //   console.log(typeof window)

  return (
    <div className='w-full relative'>
      {profileDialogIsOpen && (
        <ProfileDialog email={data?.user?.email as string} />
      )}
      <button
        className={clsx(
          'w-full flex justify-start items-center gap-3 hover:bg-accent px-2 py-2 rounded-md',
          profileDialogIsOpen ? 'bg-accent' : 'bg-primary'
        )}
        title={data?.user?.name as string}
        onClick={() =>
          dispatch(toggleProfileDialog(profileDialogIsOpen ? false : true))
        }
      >
        <article>
          {data?.user?.image ? (
            <Image
              src={data?.user?.image}
              alt='user photo'
              width={30}
              height={30}
              className='rounded-[50%]'
            />
          ) : (
            <FaUserCircle className='text-[30px]' />
          )}
        </article>
        <p className='whitespace-nowrap overflow-hidden text-ellipsis'>
          {data?.user?.name}
        </p>
      </button>
    </div>
  )
}

export default UserProfile
