import { getChats } from '@/utils/actions/chat'
import ChatList from '@/components/chat/ChatList'
import { getConversation } from '@/utils/actions/conversation'

interface chatProp {
  id: string
  question: string
  response: string
}

interface paramsProp {
  chatId: string
}

const SingleChatPage = async ({ params }: { params: paramsProp }) => {
  const chats: any = await getChats(params.chatId)
  const conversation = await getConversation(params.chatId)

  // console.log(conversation)

  return (
    <div className='h-full'>
      <h1 className='text-lg py-2 text-base-content whitespace-nowrap overflow-auto'>
        {conversation?.title}
      </h1>
      <ChatList data={chats} />
    </div>
  )
}

export default SingleChatPage
