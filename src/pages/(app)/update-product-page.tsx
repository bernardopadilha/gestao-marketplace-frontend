import { Button } from '@/components/ui/button'
import { products } from '@/features/dashboard/mock/products'
import CreateOrUpdateProductForm from '@/features/products/components/create-or-update-product-form'
import {
  ArrowLeft02Icon,
  Tick02Icon,
  UnavailableIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function UpdateProductPage() {
  const { productId } = useParams<{ productId: string }>()
  const navigate = useNavigate()

  const product = products.filter((product) => product.id === productId)[0]

  if (!product) navigate('/produtos')

  return (
    <div className="flex-1 flex py-16 justify-center">
      <div className="w-full max-w-6xl flex flex-col">
        <div className="space-y-2">
          <Button variant={'ghost'} className="text-primary " asChild>
            <Link to={'/produtos'}>
              <HugeiconsIcon icon={ArrowLeft02Icon} className="size-4" />
              Voltar
            </Link>
          </Button>
          <div className="w-full flex items-end justify-between">
            <div className="space-y-2">
              <h1 className="font-secondary text-2xl font-bold">
                Editar produto
              </h1>
              <p className="text-sm">
                Gerencie as informações do produto cadastrado
              </p>
            </div>
            <div className="space-x-4">
              <Button variant={'ghost'} className="text-primary">
                <HugeiconsIcon icon={Tick02Icon} />
                Marcar como vendido
              </Button>

              <Button variant={'ghost'} className="text-primary">
                <HugeiconsIcon icon={UnavailableIcon} />
                Desativar anúncio
              </Button>
            </div>
          </div>
        </div>

        <CreateOrUpdateProductForm
          {...product}
          image={product.imageUrl}
          price={String(product.price)}
        />
      </div>
    </div>
  )
}
