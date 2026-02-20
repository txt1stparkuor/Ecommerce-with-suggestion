import * as yup from 'yup'

export const reviewSchema = yup.object({
  rating: yup.number().min(0, 'Please give a rating').max(5, 'Please give a rating').required('Please give a rating'),
  comment: yup.string().trim(),
})