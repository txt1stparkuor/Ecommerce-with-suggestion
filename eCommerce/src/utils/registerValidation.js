import * as yup from 'yup'

export const registerSchema = yup.object({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  fullName: yup.string().required('Full name is required'),
})