import { XCircle } from 'lucide-react'

interface FormErrorProps {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className='flex items-center space-x-3 text-rose-700 dark:text-rose-300 text-sm bg-rose-600/15 dark:bg-rose-500/25 p-3 rounded-md'>
      <XCircle className='size-5' />
      <span>{message}</span>
    </div>
  )
}
