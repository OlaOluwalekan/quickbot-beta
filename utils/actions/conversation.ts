'use server'

import { db } from '@/lib/db'
import { getAIResponse } from './gemini'

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
    return res.id
  } catch (error) {
    console.log(error)
  }
}
