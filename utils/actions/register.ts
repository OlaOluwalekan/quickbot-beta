'use server'

import { z } from 'zod'
import { getUserByEmail } from '../data/user'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

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

  const User = z.object({
    email: z.string().email(),
    name: z.string().min(5, {
      message: 'Name must be at least 5 characters',
    }),
    password: z
      .string()
      .min(8, {
        message: 'Password must be at least 8 characters',
      })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/,
        {
          message:
            'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character',
        }
      ),
    confirm: z.string(),
  })

  try {
    User.parse({ email, name, password, confirm })
    if (password !== confirm) {
      return { message: 'Passwords do not match', success: false }
    }
    // console.log(email, name, password, confirm)

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
