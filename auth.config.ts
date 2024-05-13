import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { getUserByEmail } from './utils/data/user'
import bcrypt from 'bcryptjs'
import { LoginSchema } from './utils/schema'
import Google from 'next-auth/providers/google'
import Github from 'next-auth/providers/github'

export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
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
