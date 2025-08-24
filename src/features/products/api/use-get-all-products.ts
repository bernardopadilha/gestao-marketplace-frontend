import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import type { Products } from '../types'

type GetAllProductsParams = {
  userId: string
  status?: string
  title?: string
}

export function useGetAllProducts({
  userId,
  status,
  title,
}: GetAllProductsParams) {
  const query = useQuery<Products[], Error>({
    queryKey: ['get-all-products', userId, status, title],
    queryFn: async () => {
      const { data } = await api.get(`/products/all/${userId}`, {
        params: {
          status,
          title,
        },
      })
      return data
    },
    enabled: !!userId,
  })

  return query
}
