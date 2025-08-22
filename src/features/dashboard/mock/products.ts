export type Category =
  | 'brinquedo'
  | 'moveis'
  | 'papelaria'
  | 'saude & beleza'
  | 'utensilio'
  | 'vestuario'

export type Status = 'anunciado' | 'vendido' | 'cancelado'

export interface Product {
  id: string
  title: string
  price: number
  description: string
  imageUrl: string
  category: Category
  status: Status
}

export const products: Product[] = [
  {
    id: 'faca0a6a-55d1-4b4d-affc-fc5e7b0a1ef0',
    title: 'Sofá',
    price: 1200.9,
    description:
      'Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1681449856688-2abd99ab5a73?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29mYXxlbnwwfHwwfHx8MA%3D%3D',
    category: 'moveis',
    status: 'anunciado',
  },
  {
    id: '1691d5ff-120c-4939-a553-3298fefa7400',
    title: 'Camiseta masculina',
    price: 35.89,
    description:
      'Camiseta básica cinza, confeccionada em algodão 100%, com corte slim fit e gola redonda.',
    imageUrl:
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'vestuario',
    status: 'anunciado',
  },
  {
    id: '1035b393-f8aa-4659-844f-23fec2b7b4c0',
    title: 'Kit utensílios',
    price: 86.79,
    description: 'Conjunto com 10 de cozinha, feitos em madeira de bambu.',
    imageUrl:
      'https://plus.unsplash.com/premium_photo-1683140705462-11ed388653cf?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2l0JTIwdXRlbnNpbGlvfGVufDB8fDB8fHww',
    category: 'utensilio',
    status: 'vendido',
  },
  {
    id: '65a927f2-27d0-4634-97d6-b0e7f602c5c1',
    title: 'Kit de cremes',
    price: 159.9,
    description:
      'Conjunto de cuidados com a pele contendo 3 cremes: hidratante facial, creme para as mãos e crememe anti-idade.',
    imageUrl:
      'https://images.unsplash.com/photo-1648712789205-4a05ebb8d026?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8a2l0JTIwY3JlbWVzfGVufDB8fDB8fHww',
    category: 'saude & beleza',
    status: 'anunciado',
  },
  {
    id: '80cff95e-9f46-417c-9c4f-507975016dea',
    title: 'Caderno de desenho',
    price: 56.0,
    description:
      'Conjunto de cuidados com a pele contendo 3 cremes: hidratante facial, creme para as mãos e crememe anti-idade.',
    imageUrl:
      'https://images.unsplash.com/photo-1605007623233-25af9e449f89?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhZGVybm8lMjBkZSUyMGRlc2VuaG98ZW58MHx8MHx8fDA%3D',
    category: 'papelaria',
    status: 'vendido',
  },
  {
    id: 'ae9aece0-aa3c-4c0c-b727-750fd5d92902',
    title: 'Carro de brinquedo',
    price: 24.6,
    description:
      'Carrinho de brinquedo na cor amarela, feito de metal, com detalhes realistas.',
    imageUrl:
      'https://images.unsplash.com/photo-1456082902841-3335005c3082?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJyaW5xdWVkb3xlbnwwfHwwfHx8MA%3D%3D',
    category: 'brinquedo',
    status: 'cancelado',
  },
]
