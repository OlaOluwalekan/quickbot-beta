'use server'

import { db } from '@/lib/db'
import { getAIResponse } from './gemini'
import { revalidatePath } from 'next/cache'

export const createConversation = async (userId: string, text: string) => {
  const title = await getAIResponse(
    `In plain text and in a single line, without any formatting, give a title to the the text "${text}" in 60 characters maximum`
  )

  try {
    const res = await db.conversation.create({
      data: {
        title: title as string,
        createdBy: userId,
      },
    })
    revalidatePath('/chat/')
    return res.id
  } catch (error) {
    console.log(error)
  }
}

export const getConversations = async (userId: string) => {
  try {
    const conversations = await db.conversation.findMany({
      where: {
        createdBy: userId,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    })
    // console.log('NEWEST', userId, conversations)

    return conversations
  } catch (error) {
    console.log(error)
  }
}

export const getConversation = async (id: string) => {
  try {
    return await db.conversation.findUnique({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteConversation = async (id: string) => {
  try {
    await db.conversation.delete({
      where: {
        id,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
