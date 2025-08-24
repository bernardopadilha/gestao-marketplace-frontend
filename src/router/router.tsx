import AuthLayout from '@/layouts/auth-layout'
import RootLayout from '@/layouts/root-layout'
import CreateProductPage from '@/pages/(app)/create-product-page'
import DashboardPage from '@/pages/(app)/dashboard-page'
import ProductsPage from '@/pages/(app)/products-page'
import UpdateProductPage from '@/pages/(app)/update-product-page'
import SignInPage from '@/pages/(auth)/sign-in'
import SignUpPage from '@/pages/(auth)/sign-up'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectRoute } from './middlewares/protect-route'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectRoute isProtected>
        <RootLayout />
      </ProtectRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: '/produtos',
        element: <ProductsPage />,
      },
      {
        path: '/produto/:productId',
        element: <UpdateProductPage />,
      },
      {
        path: '/novo-produto',
        element: <CreateProductPage />,
      },
    ],
  },
  {
    path: '/',
    element: (
      <ProtectRoute>
        <AuthLayout />
      </ProtectRoute>
    ),
    children: [
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/sign-up',
        element: <SignUpPage />,
      },
    ],
  },
])
