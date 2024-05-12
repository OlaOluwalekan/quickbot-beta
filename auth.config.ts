import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail } from './utils/data/user'
import bcrypt from 'bcryptjs'
import { LoginSchema } from './utils/schema'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUserByEmail(credentials.email as string)
        if (!user || !user.password) {
          return null
        }

        const passwordMatch = await bcrypt.compare(
          credentials.password as string,
          user.password
        )

        if (passwordMatch) {
          // console.log('GOTTEN THE USER')
          return user
        }
        // console.log('I WILL BE NULL')

        return null
      },
    }),
  ],
} satisfies NextAuthConfig
