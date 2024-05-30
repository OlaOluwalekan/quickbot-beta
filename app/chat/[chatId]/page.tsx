import { getChats } from '@/utils/actions/chat'
import ChatList from '@/components/chat/ChatList'

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

  console.log(chats)

  return (
    <div>
      <h1 className='text-2xl text-base-content'>{params?.chatId}</h1>
      <ChatList data={chats} />
    </div>
  )
}

export default SingleChatPage
