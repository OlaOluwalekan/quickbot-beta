// utils/actions/login.ts

'use server'

import { signIn } from '@/auth'
import { LoginSchema } from '../schema'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes-deff'
import { AuthError } from 'next-auth'
import { FormEvent } from 'react'

export const login = async (formData: FormData) => {
  const email = formData.get('email')
  const password = formData.get('password')

  if (!email) {
    return { message: 'Email is required', success: false }
  }

  if (!password) {
    return { message: 'Password is required', success: false }
  }

  try {
    LoginSchema.parse({ email, password })
  } catch (error: any) {
    return { message: JSON.parse(error?.message)[0].message, success: false }
  }

  const res = await signIn('credentials', {
    email,
    password,
    redirectTo: DEFAULT_LOGIN_REDIRECT,
  })

  console.log("I'VE RESPONDED", res)
  return { message: 'logged in successfully', success: true }

  //   try {
  //     await signIn('credentials', {
  //       email,
  //       password,
  //       redirectTo: DEFAULT_LOGIN_REDIRECT,
  //     })
  //     return { message: 'logged in successfully', success: true }
  //   } catch (error) {
  //     console.log(error)
  //     return { message: 'something went wrong', success: false }
  //   }

  //   signIn('credentials', {
  //     email,
  //     password,
  //     redirectTo: DEFAULT_LOGIN_REDIRECT,
  //   })
  //     .then(() => {
  //       return { message: 'logged in successfully', success: true }
  //     })
  //     .catch((error) => {
  //       return { message: 'something went wrong', success: false }
  //     })
}

//   LoginSchema.parse({ email, password })

//   try {
//     console.log('I AM RUNNING')

//     await signIn('credentials', {
//       email,
//       password,
//       redirectTo: DEFAULT_LOGIN_REDIRECT,
//     })
//     return { message: 'logged in successfully', success: true }
//   } catch (error: any) {
//     if (error.name === 'ZodError') {
//       return { message: JSON.parse(error?.message)[0].message, success: false }
//     }
// if (error instanceof AuthError) {
//   switch (error.type) {
//     case 'CredentialsSignin':
//       return { message: 'Invalid credentials', success: false }
//     default:
//       return { message: 'something went wrong', success: false }
//   }
// }
//     return { message: 'many things went wrong', success: false }
//   }
// }

// export const login = async(e: FormEvent<HTMLFormElement>)=> {
//     e.preventDefault();

// }
