'use client'

import { RootState } from '@/store'
import { BiMoon, BiSun } from 'react-icons/bi'
import { FaMoon, FaSun, FaThemeisle } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import ThemeIcon from './ThemeIcon'
import { toggleThemeOpen } from '@/features/generalSlice'

const Theme = () => {
  const { theme, themeIsOpen } = useSelector(
    (store: RootState) => store.general
  )
  const dispatch = useDispatch()

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

  return (
    <div className='absolute bottom-20'>
      <div className=''>
        <button
          className='m-1 btn bg-primary'
          onClick={() => {
            console.log(themeIsOpen)
            dispatch(toggleThemeOpen(!themeIsOpen))
          }}
        >
          {theme === 'light' && <FaSun />}
          {theme === 'black' && <FaMoon />}
          {theme === 'dracula' && <BiMoon />}
          {theme === 'cupcake' && <BiSun />}
        </button>
        {themeIsOpen && (
          <ul className='p-2 shadow z-[1] rounded-box w-[150px] bg-primary ml-2 absolute bottom-[60px]'>
            {themes.map((theme: any) => {
              return <ThemeIcon key={theme.name} {...theme} />
            })}
          </ul>
        )}
      </div>
    </div>
  )
  // return (
  //   <div className='absolute bottom-20'>
  //     <details className='dropdown dropdown-top'>
  //       <summary
  //         className='m-1 btn bg-primary'
  //         onClick={() => {
  //           console.log(themeIsOpen)
  //           dispatch(toggleThemeOpen(!themeIsOpen))
  //         }}
  //       >
  //         {theme === 'light' && <FaSun />}
  //         {theme === 'black' && <FaMoon />}
  //         {theme === 'dracula' && <BiMoon />}
  //         {theme === 'cupcake' && <BiSun />}
  //       </summary>
  //       {themeIsOpen && (
  //         <ul className='p-2 shadow menu dropdown-content z-[1] rounded-box w-[150px] bg-primary ml-2'>
  //           {themes.map((theme: any) => {
  //             return <ThemeIcon key={theme.name} {...theme} />
  //           })}
  //         </ul>
  //       )}
  //     </details>
  //   </div>
  // )
}

export default Theme
