'use client'

import { AuthType } from '@/enums/auth-type'
import { InputBox } from '@/components/input'
import { UserIcon } from '@/components/icons/user'
import { PasswordIcon } from './icons/password'
import { EmailIcon } from './icons/email'
import Image from 'next/image'
import google from '@/public/google.png'
import Link from 'next/link'

export const AuthForm = ({ type }: { type: AuthType }) => {
  return (
    <form className='w-[80%] max-w-[400px]'>
      <h1 className='mb-24 text-center font-gelasio text-4xl capitalize'>
        {type === AuthType.SignIn ? 'Welcome back' : 'Join us today'}
      </h1>

      {type !== AuthType.SignIn && (
        <InputBox
          name='fullname'
          type='text'
          placeholder='Full Name'
          icon={UserIcon}
        />
      )}

      <InputBox
        name='email'
        type='email'
        placeholder='Email'
        icon={EmailIcon}
      />

      <InputBox
        name='password'
        type='password'
        placeholder='Password'
        icon={PasswordIcon}
      />

      <button className='btn-dark center mt-14'>
        {type === AuthType.SignIn ? 'Sign In' : 'Sign Up'}
      </button>

      <div className='relative my-10 flex w-full items-center gap-2 font-bold uppercase text-black opacity-15'>
        <hr className='w-1/2 border-black' />
        <span>or</span>
        <hr className='w-1/2 border-black' />
      </div>

      <button className='btn-dark center flex w-[90%] items-center justify-center gap-4'>
        <Image src={google} alt='Logo of Google' className='size-5' />
        Continue with Google
      </button>

      {type === AuthType.SignIn ? (
        <p className='mt-6 text-center text-xl text-dark-grey'>
          Don't have an account?{' '}
          <Link href='/signup' className='ml-1 text-xl text-black underline'>
            Join us today
          </Link>
        </p>
      ) : (
        <p className='mt-6 text-center text-xl text-dark-grey'>
          Already a member?{' '}
          <Link href='/signin' className='ml-1 text-xl text-black underline'>
            Sign in here
          </Link>
        </p>
      )}
    </form>
  )
}
