import { AuthForm } from '@/components/auth-form'
import { AuthType } from '@/enums/auth-type'

const SignInPage = () => {
  return (
    <section className='h-cover flex items-center justify-center'>
      <AuthForm type={AuthType.SignIn} />
    </section>
  )
}

export default SignInPage
