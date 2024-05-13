import React from 'react'
import NavDiv from './NavDiv'

const DesktopSidebar = () => {
  return (
    <div className='hidden md:flex w-[300px] bg-primary text-base-100'>
      <NavDiv />
    </div>
  )
}

export default DesktopSidebar
