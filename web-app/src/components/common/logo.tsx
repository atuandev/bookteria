'use client'

import { cn } from '@/lib/utils'
import { Pacifico } from 'next/font/google'
import Link from 'next/link'

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: ['400']
})

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href='/'
      className={cn(pacifico.className, 'tracking-wider text-xl', className)}
    >
      atuandev
    </Link>
  )
}
