'use server'

import { sendVerificationEmail } from '../emails/verificationEmail'
import { generateVerificationToken } from './token'

export const resendEmail = async (formData: FormData) => {
  const email = formData.get('email')

  const verificationToken = await generateVerificationToken(email as string)
  sendVerificationEmail(email as string, verificationToken.token)

  console.log(email)
}
