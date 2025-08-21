import { RouterProvider } from 'react-router-dom'
import { router } from './router/router'

export function App() {
  return (
    // <QueryClientProvider client={queryClient}>
    // <Toaster position="bottom-right" richColors />
    <RouterProvider router={router} />
    // </QueryClientProvider>
  )
}
