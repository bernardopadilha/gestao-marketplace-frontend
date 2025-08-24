import NewProductBtn from '@/components/new-product-btn'
import { Skeleton } from '@/components/ui/skeleton'
import { useUser } from '@/context/user-context'
import { LineChartVisitors } from '@/features/dashboard/components/chart-line-visitors'
import StatCard from '@/features/dashboard/components/stat-card'
import { useGetAllProducts } from '@/features/products/api/use-get-all-products'
import { Status } from '@/features/products/types'
import {
  SaleTag02Icon,
  Store04Icon,
  UserMultiple02Icon,
} from '@hugeicons/core-free-icons'
import { differenceInCalendarDays, subDays } from 'date-fns'
import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

export default function DashboardPage() {
  const { user } = useUser()
  const today = new Date()
  const [date, setDate] = useState<DateRange | undefined>({
    from: subDays(today, 30),
    to: today,
  })

  const totalDays =
    date?.from && date?.to
      ? differenceInCalendarDays(date.to, date.from) + 1
      : 0

  const { data: allProducts, isPending: allProductsPending } =
    useGetAllProducts({
      userId: user?.id ?? '',
    })

  const { data: productsSold, isPending: productsSoldPending } =
    useGetAllProducts({
      userId: user?.id ?? '',
      status: Status.VENDIDO,
    })

  const isPending = allProductsPending || productsSoldPending

  return (
    <div className="flex-1 flex py-5 lg:py-0 lg:pt-16 justify-center">
      <div className="flex flex-col max-w-6xl w-full">
        <div className="flex items-center justify-between w-full">
          <div className="space-y-2">
            <h1 className="font-secondary text-2xl font-bold">
              {totalDays > 0 ? `Últimos ${totalDays} dias` : 'Últimos 30 dias'}
            </h1>
            <p className="text:xs sm:text-sm">
              Confira as estatísticas da sua loja no último mês
            </p>
          </div>
          <div className="hidden sm:block md:hidden">
            <NewProductBtn to={'/novo-produto'} />
          </div>
        </div>

        <div className="block sm:hidden mt-5 w-full">
          <NewProductBtn to={'/novo-produto'} align="start" />
        </div>

        <div className="flex flex-col lg:flex-row gap-4 my-10 lg:my-0 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-col justify-between gap-4">
            {isPending ? (
              <Skeleton className="w-[256px] h-[104px]" />
            ) : (
              <StatCard
                value={productsSold?.length ?? 0}
                title="Produtos vendidos"
                icon={SaleTag02Icon}
              />
            )}
            {isPending ? (
              <Skeleton className="w-[256px] h-[104px]" />
            ) : (
              <StatCard
                value={allProducts?.length ?? 0}
                title="Produtos anunciados"
                icon={Store04Icon}
              />
            )}

            {isPending ? (
              <Skeleton className="w-[256px] h-[104px]" />
            ) : (
              <div className="sm:col-span-2">
                <StatCard
                  value={1661}
                  title="Pessoas visitantes"
                  icon={UserMultiple02Icon}
                  iconColor="text-gray-300"
                />
              </div>
            )}
          </div>

          <div className="flex-1">
            {isPending ? (
              <Skeleton className="w-[830px] h-[358px]" />
            ) : (
              <LineChartVisitors date={date} setDate={setDate} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
