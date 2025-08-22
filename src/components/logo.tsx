import { cn } from '@/lib/utils'

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <img
      src="/logo.svg"
      alt="Logo Marketplace"
      className={cn(size === 'sm' ? 'w-[3.25rem]' : 'w-[5.625rem]')}
    />
  )
}
