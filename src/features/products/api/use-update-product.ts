import { api } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import type { UpdateProductSchemaProps } from '../schema'

export function useUpdateProduct({ productId }: { productId: string }) {
  const mutation = useMutation({
    mutationFn: async ({
      title,
      price,
      image,
      category,
      description,
    }: UpdateProductSchemaProps) => {
      const numericPrice = Number(price?.replace(',', '.'))
      const priceInCents = Math.round(numericPrice * 100)

      const { data: product } = await api.patch(`/products/${productId}`, {
        title,
        price: priceInCents,
        category,
        description,
      })

      try {
        if (image instanceof File) {
          const formData = new FormData()
          formData.append('productImage', image)

          await api.post(`/products/${product.id}/upload-image`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
        }
      } catch (err) {
        console.warn('Falha ao enviar imagem:', err)
        toast.warning(
          'Produto criado, mas houve um erro ao enviar a imagem de produto.',
        )
      }
    },
    onSuccess: () => {
      toast.success('Produto atualizado com sucesso')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return mutation
}
