import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = ({children, className} : NavbarProps) => {
  return (
    <div className={cn("header", className)}>
      <Link href="/" className='md:flex'>
      <Image
      src="/logo.png"
      width={120}
      height={32}
      alt='image with name'
      className='hidden md:block'
       />
       <Image
      src="/logo.png"
      width={32}
      height={32}
      alt='image without name'
      className=' md:hidden'
       />
      </Link>
      {children}
    </div>
  )
}

export default Navbar