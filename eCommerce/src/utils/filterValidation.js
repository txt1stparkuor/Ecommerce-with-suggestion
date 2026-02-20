import * as yup from 'yup'

export const priceRangeSchema = yup.object({
  minPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable(),
  maxPrice: yup.number().transform((value) => (isNaN(value) ? undefined : value)).nullable()
    .test('is-greater', 'Max price must be greater than min price', function (value) {
      const { minPrice } = this.parent
      if (minPrice != null && value != null) {
        return value >= minPrice
      }
      return true
    }),
})
