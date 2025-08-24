import { api } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'
import type { UseFormReset } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import type { CreateProductSchemaProps } from '../schema'

export function useCreateProduct({
  reset,
  userId,
}: {
  userId: string
  reset: UseFormReset<CreateProductSchemaProps>
}) {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async ({
      title,
      price,
      image,
      category,
      description,
    }: CreateProductSchemaProps) => {
      const numericPrice = Number(price.replace(',', '.'))
      const priceInCents = Math.round(numericPrice * 100)

      const { data: product } = await api.post(`/products/${userId}`, {
        title,
        price: priceInCents,
        category,
        description,
      })

      try {
        const formData = new FormData()
        formData.append('productImage', image)

        await api.post(`/products/${product.id}/upload-image`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
      } catch (err) {
        console.warn('Falha ao enviar imagem:', err)
        toast.warning(
          'Produto criado, mas houve um erro ao enviar a imagem de produto.',
        )
      }

      return product
    },
    onSuccess: (product) => {
      toast.success('Produto criado e publicado com sucesso')
      reset({
        title: '',
        price: '',
        category: '',
        image: '',
        description: '',
      })
      navigate(`produto/${product.id}`)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return mutation
}
