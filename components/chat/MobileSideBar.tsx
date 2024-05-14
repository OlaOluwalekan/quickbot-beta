'use client'

import { FaTimes } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileNav } from '@/features/generalSlice'
import NavDiv from './NavDiv'
import { RootState } from '@/store'

const MobileSideBar = () => {
  const dispatch = useDispatch()
  const { mobileNavIsOpen } = useSelector((store: RootState) => store.general)

  return (
    <>
      {mobileNavIsOpen && (
        <div className='w-full fixed top-0 z-10 bg-overlay md:hidden'>
          <div className='w-[300px] h-screen bg-primary shadow-lg text-base-100'>
            <NavDiv />
          </div>
          <button
            className='absolute top-0 left-[300px] w-[40px] aspect-square flex justify-center items-center bg-primary text-primary-content rounded-r-lg hover:opacity-70'
            onClick={() => dispatch(toggleMobileNav(false))}
          >
            <FaTimes />
          </button>
        </div>
      )}
    </>
  )
}

export default MobileSideBar
