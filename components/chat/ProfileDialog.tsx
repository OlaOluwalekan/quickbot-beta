import Link from 'next/link'
import Logout from '../auth/Logout'
import clsx from 'clsx'
import { FaGear } from 'react-icons/fa6'

const ProfileDialog = ({ email }: { email: string }) => {
  return (
    <div
      className={clsx(
        'flex flex-col bg-accent absolute bottom-[50px] left-0 w-[285px] p-2 rounded-md'
      )}
    >
      <p
        className='p-2 rounded-lg my-1 whitespace-nowrap overflow-hidden text-ellipsis'
        title={email}
      >
        {email}
      </p>
      <hr />
      <Link
        href='/chat/settings'
        className='p-2 rounded-lg my-1.5 flex justify-start items-center gap-3 hover:bg-primary'
      >
        <FaGear />
        Settings
      </Link>
      <hr />
      <Logout />
    </div>
  )
}

export default ProfileDialog
