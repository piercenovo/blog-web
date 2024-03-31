'use client'

import { HTMLInputTypeAttribute, useState } from 'react'
import { EyeOffIcon } from './icons/eye-off'
import { EyeIcon } from './icons/eye'

type IconType = React.ComponentType<{ className?: string | undefined }>

interface InputBoxProps {
  name: string
  type: HTMLInputTypeAttribute
  id?: string
  value?: string
  placeholder: string
  icon: IconType
}

export const InputBox = ({
  name,
  type,
  id,
  value,
  placeholder,
  icon: Icon
}: InputBoxProps) => {
  const [passwordVisible, setPasswordVisible] = useState(false)
  const PasswordIcon = passwordVisible ? EyeIcon : EyeOffIcon
  const PasswordType = passwordVisible ? 'text' : 'password'

  return (
    <div className='relative mb-4 w-[100%]'>
      <input
        name={name}
        type={type === 'password' ? PasswordType : type}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        className='input-box'
      />
      <Icon className='input-icon size-[1.35rem]' />

      {type === 'password' && (
        <span onClick={() => setPasswordVisible((currentVal) => !currentVal)}>
          <PasswordIcon className='input-icon left-[auto] right-4 size-[1.35rem]' />
        </span>
      )}
    </div>
  )
}
