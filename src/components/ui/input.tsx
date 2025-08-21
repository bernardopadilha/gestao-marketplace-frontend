import * as React from 'react'

import { cn } from '@/lib/utils'
import { HugeiconsIcon, type HugeiconsIconProps } from '@hugeicons/react'

interface InputIconProps extends React.ComponentProps<'input'> {
  icon: HugeiconsIconProps['icon']
}

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground caret-primary text-gray-400 placeholder:text-muted-foreground placeholder:text-base selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-gray-100 flex h-12 w-full min-w-0 border-b bg-transparent text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-primary',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}
function InputIcon({ className, type, icon, ...props }: InputIconProps) {
  return (
    <div
      className="relative flex items-center w-full group"
      aria-invalid={props['aria-invalid']}
    >
      {icon && (
        <HugeiconsIcon
          icon={icon}
          className="absolute left-1 text-gray-200 group-aria-invalid:text-destructive group-focus-within:text-primary transition-colors"
        />
      )}
      <input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground caret-primary text-gray-400 placeholder:text-muted-foreground placeholder:text-base selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-gray-100 flex h-12 w-full min-w-0 border-b bg-transparent text-base pl-[34px] transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
          'focus-visible:border-primary',
          'aria-invalid:border-destructive aria-invalid:caret-destructive',
          className,
        )}
        {...props}
      />
    </div>
  )
}

export { Input, InputIcon }
