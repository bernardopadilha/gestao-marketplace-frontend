import { Loader } from '@/components/loader'
import { Button } from '@/components/ui/button'
import { useGetProduct } from '@/features/products/api/use-get-product'
import { UpdateProductForm } from '@/features/products/components/update-product-form'

import { ArrowLeft02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateProductPage() {
  const { productId } = useParams<{ productId: string }>()
  const navigate = useNavigate()

  const {
    data: product,
    isLoading,
    isError,
  } = useGetProduct({
    productId: productId ?? '',
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError || !product || !('title' in product)) {
    navigate('/produtos')
    return null
  }

  return (
    <div className="flex-1 flex py-5 justify-center">
      <div className="w-full max-w-6xl flex flex-col">
        <div className="space-y-2">
          <Button variant={'ghost'} className="text-primary " asChild>
            <Link to={'/produtos'}>
              <HugeiconsIcon icon={ArrowLeft02Icon} className="size-4" />
              Voltar
            </Link>
          </Button>
          <div className="w-full flex flex-col items-start md:flex-row md:items-end justify-between">
            <div className="space-y-2">
              <h1 className="font-secondary text-2xl font-bold">
                Editar produto
              </h1>
              <p className="text-sm">
                Gerencie as informações do produto cadastrado
              </p>
            </div>
          </div>
        </div>

        <UpdateProductForm productId={productId ?? ''} {...product} />
      </div>
    </div>
  )
}
