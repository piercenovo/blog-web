'use client'

import Link from 'next/link'
import logo from '@/public/logo.png'
import { SearchIcon } from '@/components/icons/search'
import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { EditIcon } from './icons/edit'

export const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)

  return (
    <nav className='navbar'>
      <Link href='/' className='w-10 flex-none'>
        <Image src={logo} alt='Logo' className='fill' />
      </Link>

      <div
        className={cn(
          'md:show absolute left-0 top-full mt-0.5 w-full border-b border-grey bg-white px-[5vw] py-4 md:relative md:inset-0 md:block md:w-auto md:border-0 md:p-0',
          searchBoxVisibility ? 'show' : 'hide'
        )}
      >
        <input
          type='text'
          placeholder='Search'
          className='w-full rounded-full bg-grey p-4 pl-6 pr-[12%] placeholder:text-dark-grey md:w-auto md:pl-12 md:pr-6'
        />

        <SearchIcon className='absolute right-[10%] top-1/2 size-5 -translate-y-1/2 text-dark-grey md:pointer-events-none md:left-5' />
      </div>

      <div className='ml-auto flex items-center gap-3 md:gap-4'>
        <button
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
          className='flex size-12 items-center justify-center rounded-full bg-grey md:hidden'
        >
          <SearchIcon className='size-5' />
        </button>

        <Link href='/editor' className='link hidden gap-2 md:flex'>
          <EditIcon className='size-6' />
          <span>Write</span>
        </Link>

        <Link href='/signin' className='btn-dark py-2'>
          Sign In
        </Link>
        <Link href='/signup' className='btn-light hidden py-2 md:block'>
          Sign Up
        </Link>
      </div>
    </nav>
  )
}
