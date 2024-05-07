import Logo from '@/components/logo/Logo'
import LinkBtn from '@/components/ui/buttons/LinkBtn'

const HomePage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center bg-base-100'>
      <Logo size='large' />
      <p className='w-[90%] text-center text-base-content my-5 w-max-[400]'>
        Unlock the power of instant assistance with Quick Bot, your friendly AI
        chatbot designed to streamline your tasks and boost productivity.
        Whether you need quick answers, assistance with tasks, or just a
        friendly chat, Quick Bot is here to help 24/7
      </p>
      <LinkBtn href='/register' text="Let's Chat" />
    </div>
  )
}

export default HomePage
