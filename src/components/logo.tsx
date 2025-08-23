import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

export function Logo({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <Link to={'/'}>
      <img
        src="/logo.svg"
        alt="Logo Marketplace"
        className={cn(size === 'sm' ? 'w-[3.25rem]' : 'w-[5.625rem]')}
      />
    </Link>
  )
}
