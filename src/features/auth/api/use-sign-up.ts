import { useUser } from '@/context/user-context'
import { api } from '@/lib/axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import type { UseFormReset } from 'react-hook-form'
import { toast } from 'sonner'
import type { SignUpSchemaProps } from '../schema'

export function useSignUp({
  reset,
}: {
  reset: UseFormReset<SignUpSchemaProps>
}) {
  const { setNewUser } = useUser()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async ({
      name,
      email,
      image,
      phone,
      password,
    }: SignUpSchemaProps) => {
      const { data } = await api.post('/auth/sign-up', {
        name,
        email,
        phone,
        password,
      })

      const { accessToken } = data

      Cookies.set('accessToken', accessToken, {
        path: '/',
        expires: 7,
      })

      if (image instanceof File) {
        try {
          const formData = new FormData()
          formData.append('avatar', image)

          await api.post(`/users/${data.user.id}/upload-avatar`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
        } catch (err) {
          console.warn('Falha ao enviar avatar:', err)
          toast.warning(
            'Conta criada, mas houve um erro ao enviar a imagem de perfil.',
          )
        }
      }
    },
    onSuccess: async () => {
      toast.success('Conta criada com sucesso')
      reset({
        email: '',
        password: '',
        phone: '',
        confirmPassword: '',
        image: null,
        name: '',
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
