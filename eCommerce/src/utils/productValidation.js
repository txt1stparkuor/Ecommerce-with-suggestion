import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup.string().required('Product name is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .typeError('Price must be a number')
    .min(0, 'Price must be positive')
    .required('Price is required'),
  originalPrice: yup
    .number()
    .typeError('Original price must be a number')
    .min(0, 'Original price must be positive')
    .nullable()
    .transform((_, val) => (val === '' || val === null ? null : Number(val))),
  stockQuantity: yup
    .number()
    .typeError('Stock must be a number')
    .integer('Stock must be an integer')
    .min(0, 'Stock must be positive')
    .required('Stock is required'),
  categoryId: yup.string().required('Category is required'),
});
