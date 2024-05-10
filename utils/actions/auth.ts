'use server'

import { z } from 'zod'

export const register = async (formData: FormData) => {
  const email = formData.get('email')
  const name = formData.get('name')
  const password = formData.get('password')
  const confirm = formData.get('confirm')

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
    confirm: z.string().min(8, {
      message: 'Password must be at least 8 characters',
    }),
  })

  try {
    User.parse({ email, name, password, confirm })
    console.log(email, name, password, confirm)
    return { message: 'sent', success: true }
  } catch (error: any) {
    // console.log('THE ERROR: ', JSON.parse(error?.message)[0].message)
    return { message: JSON.parse(error?.message)[0].message, success: false }
  }
}
