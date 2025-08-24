import { useUser } from '@/context/user-context'
import { api } from '@/lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import type { UseFormReset } from 'react-hook-form'
import { toast } from 'sonner'
import type { SignInSchemaProps } from '../schema'

export function useSignIn({
  reset,
}: {
  reset: UseFormReset<SignInSchemaProps>
}) {
  const { setNewUser } = useUser()

  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async ({ email, password }: SignInSchemaProps) => {
      const response = await api.post('/auth/sign-in', {
        email,
        password,
      })

      const { accessToken } = response.data

      Cookies.set('accessToken', accessToken, {
        path: '/',
        expires: 7,
      })

      return response.data
    },
    onSuccess: async () => {
      toast.success('Login efetuado com sucesso')
      reset({
        email: '',
        password: '',
      })

      await queryClient.refetchQueries({ queryKey: ['get-logged-user'] })
      queryClient.invalidateQueries({ queryKey: ['verify-token'] })
      setNewUser()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return mutation
}
