import { cn } from '@/lib/utils'
import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function NewProductBtn({
  align = 'end',
  className,
  ...props
}: {
  align?: 'center' | 'end' | 'start'
  className?: string
} & React.ComponentProps<typeof Link>) {
  return (
    <Tooltip delayDuration={7000}>
      <TooltipTrigger asChild>
        <Button asChild className={cn('font-normal', className)}>
          <Link {...props}>
            <HugeiconsIcon icon={PlusSignIcon} className="size-[14px]" />
            Novo produto
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent align={align} side="bottom">
        <p className="text-primary-foreground">
          Tá esperando o quê? Boraa moeer!! 🚀
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
