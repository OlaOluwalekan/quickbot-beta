'use server'

import { z } from 'zod'
import { getUserByEmail } from '../data/user'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'
import { RegisterSchema } from '../schema'

export const register = async (formData: FormData) => {
  const email = formData.get('email')
  const name = formData.get('name')
  const password = formData.get('password')
  const confirm = formData.get('confirm')

  if (!email) {
    return { message: 'Email is required', success: false }
  }
  if (!name) {
    return { message: 'Name is required', success: false }
  }
  if (!password) {
    return { message: 'Password is required', success: false }
  }

  try {
    RegisterSchema.parse({ email, name, password, confirm })
    if (password !== confirm) {
      return { message: 'Passwords do not match', success: false }
    }

    const existingUser = await getUserByEmail(email as string)
    if (existingUser) {
      return { message: 'Email already exists', success: false }
    }

    const hashedPassword = await bcrypt.hash(password as string, 10)

    await db.user.create({
      data: {
        email: email as string,
        name: name as string,
        password: hashedPassword,
      },
    })

    return { message: 'account created successfully', success: true }
  } catch (error: any) {
    // console.log('THE ERROR: ', JSON.parse(error?.message)[0].message)
    return { message: JSON.parse(error?.message)[0].message, success: false }
  }
}
