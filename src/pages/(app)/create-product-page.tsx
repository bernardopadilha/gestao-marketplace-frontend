import CreateOrUpdateProductForm from '@/features/products/components/create-or-update-product-form'

export default function CreateProductPage() {
  return (
    <div className="flex-1 flex py-5 justify-center">
      <div className="w-full max-w-6xl flex flex-col">
        <div className="w-full flex items-end justify-between">
          <div className="space-y-2">
            <h1 className="font-secondary text-2xl font-bold">Novo produto</h1>
            <p className="text-sm">
              Cadastre um produto para venda no marketplace
            </p>
          </div>
        </div>

        <CreateOrUpdateProductForm />
      </div>
    </div>
  )
}
