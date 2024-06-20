import VerificationForm from '@/components/chat/VerificationForm'
import { Suspense } from 'react'

const VerificationPage = async () => {
  return (
    <div>
      <Suspense>
        <VerificationForm />
      </Suspense>
    </div>
  )
}

export default VerificationPage
