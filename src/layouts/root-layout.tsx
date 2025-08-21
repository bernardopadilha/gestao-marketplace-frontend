import Navbar from '@/components/navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className="w-full h-screen flex flex-col">
      <Navbar />

      <div className="h-full p-4">
        <Outlet />
      </div>
    </div>
  )
}
