import { cn } from '@/lib/utils'

type ContainerProps = {
  className?: string
  children: React.ReactNode
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn('min-h-[calc(100vh-168px)] py-5', className)}>
      {children}
    </div>
  )
}
