import { AuthForm } from '@/components/auth-form'
import { AuthType } from '@/enums/auth-type'

const SignUpPage = () => {
  return (
    <section className='h-cover flex items-center justify-center'>
      <AuthForm type={AuthType.SignUp} />
    </section>
  )
}

export default SignUpPage
