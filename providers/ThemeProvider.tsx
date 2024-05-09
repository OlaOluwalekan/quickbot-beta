'use client'

import { RootState } from '@/store'
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme, themeIsOpen } = useSelector(
    (store: RootState) => store.general
  )

  useEffect(() => {
    console.log(themeIsOpen)
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
