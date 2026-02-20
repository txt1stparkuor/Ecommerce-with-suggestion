import { useSelector, useDispatch } from 'react-redux'
import { save, clear, updateUser } from '../store/auth.store'

const useAuth = () => {
  const user = useSelector((state) => state.auth.auth)
  const isAuthenticated = !!user?.accessToken
  const dispatch = useDispatch()

  const saveUser = (payload) => {
    dispatch(save(payload))
  }

  const setUserInfo = (payload) => {
    dispatch(updateUser(payload))
  }

  const clearUser = () => {
    dispatch(clear())
  }

  return {
    user,
    isAuthenticated,
    saveUser,
    clearUser,
    setUserInfo,
  }
}

export default useAuth
