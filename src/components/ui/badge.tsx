import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

export type Status = 'ANUNCIADO' | 'VENDIDO' | 'CANCELADO' | 'default'

interface BadgeProps
  extends React.ComponentProps<'span'>,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
  status?: Status
}

const statusColors: Record<Status, string> = {
  ANUNCIADO: 'bg-blue-300 text-white',
  VENDIDO: 'bg-success text-white',
  CANCELADO: 'bg-gray-300 text-white border-gray-500',
  default: 'bg-gray-400 text-white border-gray-400',
}

const badgeVariants = cva(
  'border-none uppercase inline-flex items-center justify-center rounded-full border px-2 py-1 text-[10px] font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
      status: statusColors,
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  status = 'default', // valor default aqui também
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={cn(badgeVariants({ variant, status }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
