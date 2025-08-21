import { Logo } from '@/components/logo'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <main className="w-full min-h-screen h-full flex justify-between">
      <div className="flex-1 items-center justify-center relative hidden lg:flex">
        <div className="flex items-center gap-[20px] absolute top-10 left-10">
          <Logo />
          <div className="space-y-1">
            <h1 className="font-secondary text-2xl font-bold m-0">
              {' '}
              Marketplace
            </h1>
            <p className="text-base text-gray-400">Painel de Vendedor</p>
          </div>
        </div>

        <img src="./auth-background.svg" alt="Imagem ilustrativa" />
      </div>

      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  )
}
