import { auth } from '@/auth'
import ChatInput from '@/components/chat/ChatInput'
import ChatMobileHeader from '@/components/chat/ChatMobileHeader'
import DesktopHeader from '@/components/chat/DesktopHeader'
import DesktopSidebar from '@/components/chat/DesktopSidebar'
import MobileSideBar from '@/components/chat/MobileSideBar'
import { ReactNode } from 'react'

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth()
  // console.log(session)

  return (
    <div className='h-screen flex flex-col'>
      <ChatMobileHeader />
      <div className='flex flex-grow'>
        <DesktopSidebar />
        <MobileSideBar />
        <div className='h-full w-full flex flex-col items-center bg-secondary'>
          <DesktopHeader>
            <div className='h-full w-full flex flex-col items-center bg-base-100 md:rounded-lg'>
              <section className='grow w-[90%] h-[calc(100vh-150px)] overflow-auto'>
                {children}
              </section>
              <ChatInput userId={session?.user?.id as string} />
            </div>
          </DesktopHeader>
        </div>
      </div>
    </div>
  )
}

export default layout
