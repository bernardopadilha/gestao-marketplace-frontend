import NewProductBtn from '@/components/new-product-btn'
import { LineChartVisitors } from '@/features/dashboard/components/chart-line-visitors'
import StatCard from '@/features/dashboard/components/stat-card'
import {
  SaleTag02Icon,
  Store04Icon,
  UserMultiple02Icon,
} from '@hugeicons/core-free-icons'

export default function DashboardPage() {
  return (
    <div className="flex-1 flex py-5 lg:py-0 lg:pt-16 justify-center">
      <div className="flex flex-col max-w-6xl w-full">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-2">
            <h1 className="font-secondary text-2xl font-bold">
              Últimos 30 dias
            </h1>
            <p className="text:xs sm:text-sm">
              Confira as estatísticas da sua loja no último mês
            </p>
          </div>
          <div className="hidden sm:block md:hidden">
            <NewProductBtn />
          </div>
        </div>

        <div className="block sm:hidden mt-5 w-full">
          <NewProductBtn align="start" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-10 lg:my-0 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-between gap-4">
            <StatCard
              value={24}
              title="Produtos vendidos"
              icon={SaleTag02Icon}
            />
            <StatCard
              value={56}
              title="Produtos anunciados"
              icon={Store04Icon}
            />
            <div className="sm:col-span-2">
              <StatCard
                value={1238}
                title="Pessoas visitantes"
                icon={UserMultiple02Icon}
                iconColor="text-gray-300"
              />
            </div>
          </div>

          <div className="flex-1">
            <LineChartVisitors />
          </div>
        </div>
      </div>
    </div>
  )
}
