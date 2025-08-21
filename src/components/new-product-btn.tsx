import { PlusSignIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from './ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function NewProductBtn({
  align = 'end',
}: {
  align?: 'center' | 'end' | 'start' | undefined
}) {
  return (
    <Tooltip delayDuration={7000}>
      <TooltipTrigger asChild>
        <Button className="font-normal">
          <HugeiconsIcon icon={PlusSignIcon} className="size-[14px]" />
          Novo produto
        </Button>
      </TooltipTrigger>
      <TooltipContent className="" align={align} side="bottom">
        <p className="text-primary-foreground">
          Tá esperando o quê? Boraa moeer!! 🚀
        </p>
      </TooltipContent>
    </Tooltip>
  )
}
