import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export function useGetUser({ userId }: { userId: string }) {
  const query = useQuery({
    queryKey: ['get-user', userId],
    queryFn: async () => {
      const { data } = await api.get(`/users/${userId}`)
      return data
    },
    enabled: !!userId,
  })
  return query
}
