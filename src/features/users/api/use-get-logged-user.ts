import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export function useGetLoggedUser() {
  const query = useQuery({
    queryKey: ['get-logged-user'],
    queryFn: async () => {
      const { data } = await api.get(`/users/logged/in`)
      return data
    },
  })
  return query
}
