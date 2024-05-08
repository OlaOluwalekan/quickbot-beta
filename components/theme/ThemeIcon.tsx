'use client'

import { changeTheme } from '@/features/generalSlice'
import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'

const ThemeIcon = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const dispatch = useDispatch()

  const handleClick = (name: string) => {
    dispatch(changeTheme(name))
  }

  return (
    <li onClick={() => handleClick(name)}>
      <div className='flex items-center gap-2'>
        <span className='text-primary-content'>{icon}</span>
        <span className='text-primary-content'>{name}</span>
      </div>
    </li>
  )
}

export default ThemeIcon
