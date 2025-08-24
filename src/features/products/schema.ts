import z from 'zod'

export const createProductSchemaProps = z.object({
  title: z
    .string({ error: 'Por favor preencha esse campo' })
    .min(1, 'Nome é obrigatório'),
  description: z
    .string({ error: 'Por favor preencha esse campo' })
    .min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  price: z
    .string({ error: 'Por favor preencha esse campo' })
    .min(1, 'Preço deve ser maior que zero'),
  category: z
    .string({ error: 'Por favor preencha esse campo' })
    .min(1, 'Categoria é obrigatória'),
  image: z.union([
    z.instanceof(File).refine((file) => file.size <= 2 * 1024 * 1024, {
      message: 'A imagem deve ter no máximo 2MB!',
    }),
    z
      .string()
      .min(1, { message: 'É necessário enviar uma imagem!' })
      .refine((val) => val !== '', {
        message: 'É necessário enviar uma imagem!',
      }),
  ]),
})

export type CreateProductSchemaProps = z.infer<typeof createProductSchemaProps>

export const updateProductSchema = createProductSchemaProps.partial()
export type UpdateProductSchemaProps = z.infer<typeof updateProductSchema>
