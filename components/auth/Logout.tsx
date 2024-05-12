'use client'

import { signOut } from 'next-auth/react'

const Logout = () => {
  return (
    <button className='px-4 py-2 bg-alert-error' onClick={() => signOut()}>
      LogOut
    </button>
  )
}

export default Logout
