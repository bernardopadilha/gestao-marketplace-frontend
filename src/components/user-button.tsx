import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Logout01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from './ui/button'

export function UserButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="overflow-hidden size-12 p-0 border-none rounded-[12px]"
        >
          <img
            src="https://avatars.githubusercontent.com/u/96125997?v=4"
            alt="Avatar image"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-4" align="end">
        <div className="flex items-center gap-3">
          <img
            src="https://avatars.githubusercontent.com/u/96125997?v=4"
            alt="Avatar image"
            className="size-10 rounded-[8px]"
          />
          <h1 className="text-gray-300">
            Bernardo <br /> Padilha
          </h1>
        </div>
        <DropdownMenuSeparator className="my-5" />
        <Button variant="ghost" className="w-full justify-between text-primary">
          Sair
          <HugeiconsIcon icon={Logout01Icon} className="size-5" />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
