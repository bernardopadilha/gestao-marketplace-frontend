export type Category =
  | 'brinquedo'
  | 'móveis'
  | 'papelaria'
  | 'saúde & beleza'
  | 'utensílio'
  | 'vestuário'

export type Status = 'anunciado' | 'vendido' | 'cancelado'

export interface Product {
  name: string
  price: number
  description: string
  imageUrl: string
  category: Category
  status: Status
}

export const products: Product[] = [
  {
    name: 'Sofá',
    price: 1200.9,
    description:
      'Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em...',
    imageUrl: './sofa.png',
    category: 'móveis',
    status: 'anunciado',
  },
  {
    name: 'Camiseta masculina',
    price: 35.89,
    description:
      'Camiseta básica cinza, confeccionada em algodão 100%, com corte slim fit e gola...',
    imageUrl: './camiseta.png',
    category: 'vestuário',
    status: 'anunciado',
  },
  {
    name: 'Kit utensílios',
    price: 86.79,
    description: 'Conjunto com 10 de cozinha, feitos em madeira de bambu.',
    imageUrl: './kit-utensilios.png',
    category: 'utensílio',
    status: 'anunciado',
  },
  {
    name: 'Kit de cremes',
    price: 159.9,
    description:
      'Conjunto de cuidados com a pele contendo 3 cremes: hidratante facial, creme...',
    imageUrl: './kit-cremes.png',
    category: 'saúde & beleza',
    status: 'anunciado',
  },
  {
    name: 'Caderno de desenho',
    price: 56.0,
    description:
      'Caderno tamanho A4 com 120 páginas, gramatura de 180g/m², ideal para técnicas...',
    imageUrl: './caderno.png',
    category: 'papelaria',
    status: 'vendido',
  },
  {
    name: 'Carro de brinquedo',
    price: 24.6,
    description:
      'Carrinho de brinquedo na cor amarela, feito de metal, com detalhes realistas.',
    imageUrl: './carro-brinquedo.png',
    category: 'brinquedo',
    status: 'cancelado',
  },
]
