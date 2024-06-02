'use server'

import { db } from '@/lib/db'
import { createConversation } from './conversation'
import { getAIResponse } from './gemini'
import { revalidatePath } from 'next/cache'

export const createChat = async (formData: FormData, page: string) => {
  const text = formData.get('question')
  const id = formData.get('id')
  let conversationId

  if (!text) {
    return {
      message: 'text is required',
      success: false,
      data: { conversationId },
    }
  }

  if (page === '/chat') {
    conversationId = await createConversation(id as string, text as string)
  } else {
    conversationId = page.split('/').pop()
  }

  const response = await getAIResponse(text as string)
  // console.log('RESPONSE: ', response)
  try {
    await db.chat.create({
      data: {
        conversationId: conversationId as string,
        question: text as string,
        response: response as string,
      },
    })

    await db.conversation.update({
      where: {
        id: conversationId as string,
      },
      data: {
        updatedAt: new Date(),
      },
    })

    revalidatePath('/chat')
    revalidatePath(`/chat/${conversationId}`)
    return { success: true, message: 'chat created', data: { conversationId } }
  } catch (error) {
    console.log(error)
    return {
      success: false,
      message: JSON.stringify(error),
      data: { conversationId },
    }
  }
  return { success: true, message: 'chat created', data: { conversationId } }
}

export const getChats = async (id: string) => {
  try {
    const chats = await db.chat.findMany({
      where: {
        conversationId: id,
      },
    })
    return chats
  } catch (error) {
    console.log(error)
  }
}
