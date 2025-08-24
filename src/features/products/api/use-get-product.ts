import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import type { Products } from '../types'

export function useGetProduct({ productId }: { productId: string }) {
  const query = useQuery<Products | Error>({
    queryKey: ['get-user', productId],
    queryFn: async () => {
      const { data } = await api.get(`/products/${productId}`)
      return data
    },
    enabled: !!productId,
  })
  return query
}
