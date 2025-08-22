import NewProductBtn from '@/components/new-product-btn'
import { products } from '@/features/dashboard/mock/products'
import FilterProductsCard from '@/features/products/components/filter-products-card'
import ProductCard from '@/features/products/components/product-card'
import { AddCircleHalfDotIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'

export default function ProductsPage() {
  return (
    <div className="flex-1 flex py-16 justify-center">
      <div className="flex flex-col max-w-6xl w-full">
        {products.length <= 0 ? (
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

            <NewProductBtn align="center" className="h-14 w-56" />
          </div>
        ) : (
          <>
            <div className="space-y-2">
              <h1 className="font-secondary text-2xl font-bold">
                Seus produtos
              </h1>
              <p className="text-sm">
                Acesse gerencie a sua lista de produtos à venda
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 mt-10">
              <div className="static lg:sticky top-10 h-fit lg:self-start">
                <FilterProductsCard />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
                {products.map((product, i) => (
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
