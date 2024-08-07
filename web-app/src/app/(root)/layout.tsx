import { Metadata } from 'next'

import { Toaster } from '@/components/ui/sonner'
import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Toaster richColors />
      <Header />
      <main className='relative mx-auto max-w-6xl px-4 md:px-8 pt-24 mb-4'>
        {children}
      </main>
      <Footer />
    </>
  )
}
