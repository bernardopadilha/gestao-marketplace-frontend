import NewProductBtn from '@/components/new-product-btn'
import { Skeleton } from '@/components/ui/skeleton'
import { useUser } from '@/context/user-context'
import { useGetAllProducts } from '@/features/products/api/use-get-all-products'
import FilterProductsCard from '@/features/products/components/filter-products-card'
import ProductCard from '@/features/products/components/product-card'
import { AddCircleHalfDotIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function ProductsPage() {
  const { user, isLoading: userPending } = useUser()

  const [searchParams, setSearchParams] = useSearchParams()

  const [status, setStatus] = useState<string>(searchParams.get('status') || '')
  const [title, setTitle] = useState<string>(searchParams.get('title') || '')

  const { data: allProducts } = useGetAllProducts({
    userId: user?.id ?? '',
  })

  const { data: filteredProducts, isPending: filteredProductsPending } =
    useGetAllProducts({
      userId: user?.id ?? '',
      title,
      status,
    })

  return (
    <div className="flex-1 flex py-5 justify-center">
      <div className="flex flex-col max-w-6xl w-full">
        {allProducts && allProducts.length <= 0 ? (
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div className="space-y-1">
              <h1 className="font-secondary text-2xl font-bold">
                Cadastre seu primeiro produto
              </h1>
              <p className="text-sm">
                Você ainda não possui produtos cadastrados
              </p>
            </div>

            <HugeiconsIcon
              icon={AddCircleHalfDotIcon}
              className="size-10 text-primary"
            />

            <NewProductBtn
              to={'/novo-produto'}
              align="center"
              className="h-14 w-56"
            />
          </div>
        ) : (
          <>
            <div className="space-y-2">
              {userPending ? (
                <>
                  <Skeleton className="h-6 w-42" />
                  <Skeleton className="h-3.5 w-64" />
                </>
              ) : (
                <>
                  <h1 className="font-secondary text-2xl font-bold">
                    Seus produtos
                  </h1>
                  <p className="text-sm">
                    Acesse gerencie a sua lista de produtos à venda
                  </p>
                </>
              )}
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              <div className="static lg:sticky top-10 h-fit lg:self-start">
                {userPending ? (
                  <Skeleton className="w-80 h-72" />
                ) : (
                  <FilterProductsCard
                    title={title}
                    setTitle={setTitle}
                    status={status}
                    setStatus={setStatus}
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                  />
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filteredProductsPending
                  ? [1, 2, 3, 4].map((i) => (
                      <Skeleton key={i} className="w-[394px] h-[317px]" />
                    ))
                  : filteredProducts &&
                    filteredProducts.map((product, i) => (
                      <ProductCard {...product} key={i} />
                    ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
