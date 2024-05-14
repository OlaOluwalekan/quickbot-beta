'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

export const getAIResponse = async (message: string) => {
  try {
    const model = ai.getGenerativeModel({ model: 'gemini-pro' })
    const response = model.generateContent(message)
    const result = (await response).response
    return result.text()
  } catch (error) {
    return { error: 'something went wrong' }
  }
}
