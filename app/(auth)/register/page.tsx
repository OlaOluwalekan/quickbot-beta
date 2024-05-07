import AuthCard from '@/components/auth/AuthCard'
import RegisterForm from '@/components/auth/RegisterForm'
import InputWithIcon from '@/components/ui/inputs/InputWithIcon'

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-base-100'>
      <AuthCard
        page='Register'
        headerText='Create your account in one simple click'
      >
        <RegisterForm />
      </AuthCard>
    </div>
  )
}

export default RegisterPage
