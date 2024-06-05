'use server'

import { signIn } from '@/auth'
import { LoginSchema } from '../schema'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes-deff'
import { AuthError } from 'next-auth'
import { getUserByEmail } from '../data/user'
import { redirect } from 'next/navigation'

export const login = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email) {
    return { message: 'email is required', success: false }
  }

  if (!password) {
    return { message: 'password is required', success: false }
  }

  const existingUser = await getUserByEmail(email as string)

  // console.log(existingUser)
  if (!existingUser?.emailVerified) {
    return { message: 'email not verified', success: false }
  }

  try {
    LoginSchema.safeParse({ email, password })

    await signIn('credentials', {
      email,
      password,
      redirect: false,
      // redirectTo: DEFAULT_LOGIN_REDIRECT,
    })
    return { message: 'logged in successfully', success: true }
  } catch (error: any) {
    if (error.name === 'ZodError') {
      return {
        message: JSON.parse(error?.message)[0].message,
        success: false,
      }
    }
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Invalid credentials', success: false }
        default:
          return { message: 'something went wrong', success: false }
      }
    }

    throw error
  }
}
