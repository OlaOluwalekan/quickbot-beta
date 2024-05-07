'use client'

import { RootState } from '@/store'
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { theme } = useSelector((store: RootState) => store.general)

  //   console.log(theme)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}

export default ThemeProvider
