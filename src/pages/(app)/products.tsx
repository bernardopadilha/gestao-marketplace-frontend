import { products } from '@/features/dashboard/mock/products'
import FilterProductsCard from '@/features/products/components/filter-products-card'
import ProductCard from '@/features/products/components/product-card'

export default function ProductsPage() {
  return (
    <div className="flex-1 flex py-16 justify-center">
      <div className="flex flex-col max-w-6xl w-full">
        <div className="space-y-2">
          <h1 className="font-secondary text-2xl font-bold">Seus produtos</h1>
          <p className="text-sm">
            Acesse gerencie a sua lista de produtos à venda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mt-10">
          <div className="sticky">
            <FilterProductsCard />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
            {products.map((product, i) => (
              <ProductCard {...product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
