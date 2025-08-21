import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { SignUpForm } from '@/features/auth/components/sign-up-form'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from 'react-router-dom'

export default function SignUpPage() {
  return (
    <div className="h-screen p-3 lg:p-6 flex justify-center items-center">
      <div className="h-full max-h-full w-full flex flex-col justify-between bg-white rounded-4xl py-[25px] px-[2px]">
        <div className="px-3 lg:py-[46px] lg:px-[78px] overflow-auto">
          <div>
            <div className="mb-10 block lg:hidden">
              <Logo />
            </div>
            <h1 className="text-2xl font-secondary font-bold">
              Crie sua conta
            </h1>
            <p className="mt-2">Informe os seus dados pessoais e de acesso</p>

            <SignUpForm />
          </div>

          <div className="flex flex-col gap-5 mt-20">
            <Link to={'/sign-in'} className="hover:underline">
              Já tem uma conta?
            </Link>

            <Button size={'lg'} variant={'outline'} asChild>
              <Link to={'/sign-in'}>
                Acessar
                <HugeiconsIcon icon={ArrowRight02Icon} className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
