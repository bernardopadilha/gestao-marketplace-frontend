export const Category = {
  BRINQUEDO: 'BRINQUEDO',
  MOVEL: 'MOVEL',
  PAPELARIA: 'PAPELARIA',
  SAUDE_E_BELEZA: 'SAUDE_E_BELEZA',
  UTENSILIO: 'UTENSILIO',
  VESTUARIO: 'VESTUARIO',
} as const

export const Status = {
  ANUNCIADO: 'ANUNCIADO',
  VENDIDO: 'VENDIDO',
  CANCELADO: 'CANCELADO',
} as const

export type Status = (typeof Status)[keyof typeof Status]
export type Category = (typeof Category)[keyof typeof Category]

export type Products = {
  id: string
  title: string
  description: string
  price: number
  category: Category
  status?: Status
  imageUrl?: string
}
