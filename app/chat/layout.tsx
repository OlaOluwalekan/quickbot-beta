import ChatInput from '@/components/chat/ChatInput'
import ChatMobileHeader from '@/components/chat/ChatMobileHeader'
import DesktopSidebar from '@/components/chat/DesktopSidebar'
import { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen flex flex-col'>
      <ChatMobileHeader />
      <div className='flex flex-grow'>
        <DesktopSidebar />
        <div className='h-full w-full flex flex-col items-center bg-secondary'>
          <section className='flex-grow'>{children}</section>
          <ChatInput />
        </div>
      </div>
    </div>
  )
}

export default layout
