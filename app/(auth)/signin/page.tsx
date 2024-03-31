import { AnimationWrapper } from '@/common/page-animation'
import { AuthForm } from '@/components/auth-form'
import { AuthType } from '@/enums/auth-type'

const SignInPage = () => {
  return (
    <AnimationWrapper>
      <section className='h-cover flex items-center justify-center'>
        <AuthForm type={AuthType.SignIn} />
      </section>
    </AnimationWrapper>
  )
}

export default SignInPage
