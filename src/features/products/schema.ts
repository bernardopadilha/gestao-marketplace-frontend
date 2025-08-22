import z from 'zod'

export const productSchema = z.object({
  title: z.string().min(1, 'Nome é obrigatório'),
  description: z
    .string()
    .min(10, 'Descrição deve ter pelo menos 10 caracteres'),
  price: z.string().min(1, 'Preço deve ser maior que zero'),
  category: z.string().min(1, 'Categoria é obrigatória'),
  image: z.union([
    z.instanceof(File).refine((file) => file.size <= 2 * 1024 * 1024, {
      message: 'A imagem deve ter no máximo 2MB!',
    }),
    z.string().min(1),
  ]),
})

export type ProductSchemaProps = z.infer<typeof productSchema>
