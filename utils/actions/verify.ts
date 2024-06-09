'use server'

import { db } from '@/lib/db'
import { getUserByEmail } from '../data/user'
import { getVerificationTokenByToken } from '../data/verification-token'
import { signIn } from '@/auth'

export const verifyUser = async (token: string) => {
  try {
    const existingToken = await getVerificationTokenByToken(token)
    if (!existingToken) {
      return { message: 'Invalid token', success: false, email: null }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    const hasExpired = new Date(existingToken.expires) < new Date()
    if (hasExpired) {
      return {
        message: 'Verification link has expired',
        success: false,
        email: existingUser?.email,
      }
    }

    if (!existingUser) {
      return { message: 'Email does not exist', success: false, email: null }
    }

    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    })

    return {
      message: 'Email verified successfully',
      success: true,
      email: existingUser.email,
    }
    // console.log('USER TOKEN: ', res)
  } catch (error) {
    console.log(error)
    return { message: 'something went wrong', success: false, email: null }
  }
}
