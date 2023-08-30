import useAppStore from '@/store/useAppStore'
import { JSX, FC, ReactNode } from 'react'
import { Outlet, Navigate } from 'react-router-dom'

type TProtectedRoute = {
  children?: ReactNode[]
  elseTo?: boolean
}
const ProtectedRoute: FC<TProtectedRoute> = ({ elseTo = false }): JSX.Element => {
  const isAuthenticated = useAppStore(state => state.isLogged)
  if (isAuthenticated && elseTo) return <Navigate to='/dashboard' replace />
  else if (!isAuthenticated && !elseTo) return <Navigate to='/login' replace />
  return <Outlet />
}

export default ProtectedRoute
