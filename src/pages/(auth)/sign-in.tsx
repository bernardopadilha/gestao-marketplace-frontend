import { Button } from '@/components/ui/button'
import { SignInForm } from '@/features/auth/components/sign-in-form'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

import { Link } from 'react-router-dom'

export default function SignInPage() {
  return (
    <div className="h-full p-6">
      <div className="h-full flex flex-col justify-between bg-white py-[4.5rem] px-20 rounded-4xl">
        <div className="space-y-2">
          <h1 className="text-2xl font-secondary font-bold">
            Acesse sua conta
          </h1>
          <p className="mt-2">Informe seu e-mail e senha para entrar</p>

          <SignInForm />
        </div>

        <div className="flex flex-col gap-5">
          <Link to={'/sign-up'} className="hover:underline">
            Ainda não tem uma conta?
          </Link>

          <Button size={'lg'} variant={'outline'} asChild>
            <Link to={'/sign-up'}>
              Cadastrar
              <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
