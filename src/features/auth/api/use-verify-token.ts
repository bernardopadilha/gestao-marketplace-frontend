import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export function useVerifyToken() {
  const query = useQuery({
    queryKey: ['verify-token'],
    queryFn: async () => {
      const { data } = await api.get('auth/verify-token')
      return data
    },
    retry: 0,
  })
  return query
}
