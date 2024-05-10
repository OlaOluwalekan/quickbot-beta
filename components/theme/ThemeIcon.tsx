'use client'

import { changeTheme, toggleThemeOpen } from '@/features/generalSlice'
import { ReactNode } from 'react'
import { useDispatch } from 'react-redux'

const ThemeIcon = ({ name, icon }: { name: string; icon: ReactNode }) => {
  const dispatch = useDispatch()

  const handleClick = (name: string) => {
    dispatch(changeTheme(name))
    dispatch(toggleThemeOpen(false))
  }

  return (
    <li
      onClick={() => handleClick(name)}
      className='leading-8 rounded-lg hover:bg-accent cursor-pointer px-2'
    >
      <div className='flex items-center gap-2'>
        <span className='text-primary-content'>{icon}</span>
        <span className='text-primary-content'>{name}</span>
      </div>
    </li>
  )
}

export default ThemeIcon
