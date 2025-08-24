import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import { UserProvider } from './context/user-context'
import { queryClient } from './lib/react-query'
import { router } from './router/router'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Toaster position="bottom-right" richColors />
        <RouterProvider router={router} />
      </UserProvider>
    </QueryClientProvider>
  )
}
