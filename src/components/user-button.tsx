import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useUser } from '@/context/user-context'
import { Logout01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'

export function UserButton() {
  const { user, resetUser, isLoading } = useUser()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {isLoading ? (
          <Skeleton className="size-12 rounded-[12px]" />
        ) : (
          <Button
            variant="outline"
            className="overflow-hidden size-12 p-0 border-none rounded-[12px]"
          >
            <Avatar className="size-full rounded-none">
              <AvatarFallback className="bg-blue-100 rounded-none">
                {user?.name.split(' ')[0].split('')[0]}
              </AvatarFallback>
              <AvatarImage src={user?.imageUrl} alt={`Avatar de ${user?.id}`} />
            </Avatar>
          </Button>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-4" align="end">
        <div className="flex items-center gap-3">
          <Avatar className="size-10 rounded-[8px]">
            <AvatarFallback className="bg-blue-100 rounded-none text-base">
              {user?.name.split(' ')[0].split('')[0]}
            </AvatarFallback>
            <AvatarImage src={user?.imageUrl} alt={`Avatar de ${user?.id}`} />
          </Avatar>
          <h1 className="text-gray-300">
            {user?.name
              .split(' ')
              .slice(0, 2)
              .join('\n')
              .split('\n')
              .map((n, i) => (
                <span key={i}>
                  {n}
                  <br />
                </span>
              ))}
          </h1>
        </div>
        <DropdownMenuSeparator className="my-5" />
        <Button
          onClick={async () => {
            try {
              resetUser()
              Cookies.remove('accessToken')
              await queryClient.cancelQueries()
              queryClient.clear()
              navigate('/sign-in', { replace: true })
            } catch (error) {
              console.error('Erro no logout:', error)
            }
          }}
          variant="ghost"
          className="w-full justify-between text-primary"
        >
          Sair
          <HugeiconsIcon icon={Logout01Icon} className="size-5" />
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
