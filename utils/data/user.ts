import { db } from '@/lib/db'

export const getUserByEmail = async (email: string) => {
  try {
    return await db.user.findFirst({
      where: {
        email,
      },
    })
  } catch (error) {
    return null
  }
}
