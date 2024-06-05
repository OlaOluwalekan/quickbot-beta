'use server'

import { GoogleGenerativeAI } from '@google/generative-ai'

const PROMPT =
  'Generate 4 default prompts for a chatbot application. Include prompts for general information, product information, technical support, account and billing, recommendations, feedback, and fun facts. It should be in the form of a javascript array of objects. The length of the array should be 4 and should be named defaultPrompts. Each object should have a text and a category key. The text should be a string containing the actual prompt while the category should also be a string - the category the prompts belongs to.'

const prompts = [
  {
    text: 'How do I format my windows laptop',
    category: 'technical support',
  },
  {
    text: 'How do I format my mac laptop',
    category: 'technical support',
  },
  {
    text: 'How many days in a leap year',
    category: 'educational',
  },
  {
    text: 'How many days in a normal year',
    category: 'educational',
  },
]

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string)

export const getAIResponse = async (message: string) => {
  try {
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const response = model.generateContent(message)
    const result = (await response).response
    return result.text()
  } catch (error) {
    return { error: 'something went wrong' }
  }
}

export const generatePrompts = async () => {
  return prompts
}

export const getAdvancedAIResponse = async (
  message: string,
  history: any[] = []
) => {
  // console.log('HISTORY: ', history)

  try {
    const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const chat = model.startChat({
      history,
    })

    const result = await chat.sendMessage(message)
    const response = await result.response
    const text = response.text()
    // console.log('ADVANCED: ', text)
    return text
  } catch (error) {
    console.log(error)
  }
}
