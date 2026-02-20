import React from 'react'
import { Card, Rate, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Text } = Typography

const Product = ({ product }) => {
  const navigate = useNavigate()

  return (
    <Card
      hoverable
      onClick={() => {
        navigate(`/products/${product.id}`)
        window.scrollTo(0, 0)
      }}
      className="group overflow-hidden border border-gray-200 transition-all hover:border-[#ee4d2d] hover:shadow-md"
      styles={{ body: { padding: '8px' } }}
      cover={
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <img
            alt={product.name}
            src={product.imageUrl}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
          {product.discountPercentage > 0 && (
            <div className="absolute right-0 top-0 bg-[#feeeea] px-1 py-0.5 text-xs font-medium text-[#ee4d2d]">
              -{product.discountPercentage}%
            </div>
          )}
        </div>
      }
    >
      <div className="flex flex-col gap-1">
        <Text
          className="text-sm text-gray-800 line-clamp-2"
          title={product.name}
        >
          {product.name}
        </Text>

        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <Text className="text-base font-bold text-[#ee4d2d]">
              ₹{product.price?.toLocaleString()}
            </Text>
          </div>
          <div className="flex items-center gap-1">
            <Rate
              disabled
              defaultValue={product.averageRating}
              style={{ fontSize: 10 }}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Product