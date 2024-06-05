import React from 'react'
import NavDiv from './NavDiv'

const DesktopSidebar = () => {
  return (
    <div className='hidden w-[300px] bg-primary text-base-100 md:flex'>
      <NavDiv />
    </div>
  )
}

export default DesktopSidebar
