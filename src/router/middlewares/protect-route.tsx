import { Loader } from '@/components/loader'
import { useVerifyToken } from '@/features/auth/api/use-verify-token'
import Cookies from 'js-cookie'
import { type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface ProtectRouteProps {
  children: ReactNode
  isProtected?: boolean
}

export function ProtectRoute({
  children,
  isProtected = false,
}: ProtectRouteProps) {
  const accessToken = Cookies.get('accessToken')
  const { isLoading, isError, isSuccess } = useVerifyToken()

  if (isProtected) {
    if (!accessToken) return <Navigate to="/sign-in" replace />
    if (isLoading) return <Loader />
    if (isError) return <Navigate to="/sign-in" replace />
    return children
  }

  if (accessToken) {
    if (isLoading) return <Loader />
    if (isSuccess) return <Navigate to="/" replace />
  }

  return children
}
