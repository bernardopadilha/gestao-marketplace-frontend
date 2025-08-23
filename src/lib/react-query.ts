import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.error('Query error:', error)
        toast.error(error.response?.data?.message || 'Erro ao buscar dados.')
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        console.error('Mutation error:', error)
        toast.error(error.response?.data?.message || 'Erro ao executar ação.')
      }
    },
  }),
})
