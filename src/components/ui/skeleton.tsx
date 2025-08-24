import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-shape animate-pulse rounded-[20px]', className)}
      {...props}
    />
  )
}

export { Skeleton }
