'use client'

import { RootState } from '@/store'
import { BiMoon, BiSun } from 'react-icons/bi'
import { FaMoon, FaSun, FaThemeisle } from 'react-icons/fa6'
import { useSelector } from 'react-redux'
import ThemeIcon from './ThemeIcon'

const Theme = () => {
  const { theme } = useSelector((store: RootState) => store.general)

  const themes = [
    {
      name: 'light',
      icon: <FaSun />,
    },
    {
      name: 'black',
      icon: <FaMoon />,
    },
    {
      name: 'dracula',
      icon: <BiMoon />,
    },
    {
      name: 'cupcake',
      icon: <BiSun />,
    },
  ]

  //   interface objType {
  //     light: React.ReactNode,
  //     dark: React.ReactNode,
  //     dracula: React.ReactNode,
  //     cupcake: React.ReactNode,
  //   }

  //   const themeObj: objType = {
  //     light: <FaSun />,
  //     dark: <FaMoon />,
  //     dracula: <BiMoon />,
  //     cupcake: <BiSun />,
  //   }

  return (
    <div className='absolute bottom-20'>
      <details className='dropdown dropdown-top'>
        <summary className='m-1 btn bg-primary'>
          {theme === 'light' && <FaSun />}
          {theme === 'black' && <FaMoon />}
          {theme === 'dracula' && <BiMoon />}
          {theme === 'cupcake' && <BiSun />}
        </summary>
        <ul className='p-2 shadow menu dropdown-content z-[1] rounded-box w-[150px] bg-primary ml-2'>
          {themes.map((theme: any) => {
            console.log(theme)

            return <ThemeIcon key={theme.name} {...theme} />
          })}
        </ul>
      </details>
    </div>
  )
}

export default Theme
