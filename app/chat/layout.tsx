'use client'

import ChatInput from '@/components/chat/ChatInput'
import ChatMobileHeader from '@/components/chat/ChatMobileHeader'
import DesktopHeader from '@/components/chat/DesktopHeader'
import DesktopSidebar from '@/components/chat/DesktopSidebar'
import MobileSideBar from '@/components/chat/MobileSideBar'
import { RootState } from '@/store'
import { ReactNode } from 'react'
import { useSelector } from 'react-redux'

const layout = ({ children }: { children: ReactNode }) => {
  const { mobileNavIsOpen } = useSelector((store: RootState) => store.general)

  return (
    <div className='h-screen flex flex-col'>
      <ChatMobileHeader />
      <div className='flex flex-grow'>
        <DesktopSidebar />
        {mobileNavIsOpen && <MobileSideBar />}
        <div className='h-full w-full flex flex-col items-center bg-secondary'>
          <DesktopHeader>
            <div className='h-full w-full flex flex-col items-center bg-base-100 md:rounded-lg md:mr-2'>
              <section className='flex-grow'>{children}</section>
              <ChatInput />
            </div>
          </DesktopHeader>
        </div>
      </div>
    </div>
  )
}

export default layout
