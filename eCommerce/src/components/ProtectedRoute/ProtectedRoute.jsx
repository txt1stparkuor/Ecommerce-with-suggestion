import React from 'react'
import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const ProtectedRoute = ({ roles }) => {
  const { user, isAuthenticated } = useAuth()
  const location = useLocation()
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  const userRoles =  user?.authorities?.[0]?.authority;
  const isAuthorized = roles ? roles.includes(userRoles) : true
  if (!isAuthorized) {
    return <Navigate to="/unauthorized" replace />
  }
  return <Outlet />
}

export default ProtectedRoute