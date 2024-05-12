import { z } from 'zod'

export const RegisterSchema = z.object({
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

export const LoginSchema = z.object({
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'invalid email address',
    }),
  password: z.string(),
})
