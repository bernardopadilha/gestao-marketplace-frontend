import { cn } from '@/lib/utils'
import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function NewProductBtn({
  align = 'end',
  className,
}: {
  align?: 'center' | 'end' | 'start' | undefined
  className?: string
}) {
  return (
    <Tooltip delayDuration={7000}>
      <TooltipTrigger asChild>
        <Button className={cn('font-normal', className)}>
          <HugeiconsIcon icon={PlusSignIcon} className="size-[14px]" />
          Novo produto
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
