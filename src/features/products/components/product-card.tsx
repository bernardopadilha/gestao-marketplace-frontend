import { Badge } from '@/components/ui/badge'
import type { Product } from '@/features/dashboard/mock/products'

export default function ProductCard({
  name,
  price,
  description,
  category,
  imageUrl,
  status,
}: Product) {
  return (
    <div className="w-full bg-white p-1 space-y-1 rounded-[20px] hover:scale-[.99] transition-all duration-300">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Product image"
          className="w-full max-h-[144px] h-full object-cover aspect-video rounded-[16px]"
        />

        <div className="absolute top-2 right-2 space-x-1">
          <Badge status={status}>{status}</Badge>
          <Badge>{category}</Badge>
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 px-3 py-3">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-semibold text-lg">{name}</h1>
          <p className="font-secondary font-bold text-xl text-gray-500">
            <span className="font-medium text-xs text-gray-500">R$</span>{' '}
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </div>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  )
}
