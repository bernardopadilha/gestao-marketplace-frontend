import { z } from 'zod'

const passwordSchema = z
  .string({ message: 'Por favor preencha esse campo' })
  .min(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  .regex(/[A-Z]/, {
    message: 'A senha deve conter pelo menos uma letra maiúscula',
  })
  .regex(/[a-z]/, {
    message: 'A senha deve conter pelo menos uma letra minúscula',
  })
  .regex(/[0-9]/, { message: 'A senha deve conter pelo menos um número' })
  .regex(/[^A-Za-z0-9]/, {
    message: 'A senha deve conter pelo menos um caractere especial',
  })

export const signInSchema = z.object({
  email: z
    .string({ message: 'Por favor preencha esse campo' })
    .email({ message: 'Por favor digite um e-mail válido' }),
  password: z.string({ message: 'Por favor preencha esse campo' }),
})

export const signUpSchema = z
  .object({
    name: z
      .string({ message: 'Por favor preencha esse campo' })
      .min(3, { message: 'Nome deve ter pelo menos 3 caracteres' })
      .max(100, { message: 'Nome deve ter no máximo 100 caracteres' }),
    phone: z.string({ message: 'Por favor preencha esse campo' }),
    email: z
      .string({ message: 'Por favor preencha esse campo' })
      .email({ message: 'Formato de email inválido' })
      .min(5, { message: 'Email deve ter pelo menos 5 caracteres' })
      .max(100, { message: 'Email deve ter no máximo 100 caracteres' }),
    password: passwordSchema,
    confirmPassword: passwordSchema,
    image: z
      .union([
        z.instanceof(File).refine((file) => file.size <= 2 * 1024 * 1024, {
          message: 'A imagem deve ter no máximo 2MB!',
        }),
        z.string().min(1),
        z.null(),
        z.undefined(),
      ])
      .optional()
      .nullable(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam ser iguais',
    path: ['confirmPassword'],
  })

export type SignUpSchemaProps = z.infer<typeof signUpSchema>
export type SignInSchemaProps = z.infer<typeof signInSchema>
