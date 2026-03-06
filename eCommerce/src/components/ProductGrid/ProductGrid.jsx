import React from 'react'
import { Card, Empty } from 'antd'
import Product from '../Product/Product'

const ProductGrid = ({ products, isLoading }) => {
  const renderSkeleton = () => (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <Card key={index} loading className="shadow-sm" />
      ))}
    </div>
  )

  return (
    <>
      {isLoading ? (
        renderSkeleton()
      ) : products.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {products.map((item) => {
            const product = {
              id: item.productId,
              name: item.productName,
              imageUrl: item.imgLink,
              price: item.discountedPrice,
              averageRating: item.rating,
              discountPercentage:
                item.actualPrice > 0 && item.actualPrice > item.discountedPrice
                  ? Math.round(((item.actualPrice - item.discountedPrice) / item.actualPrice) * 100)
                  : 0,
            }
            return <Product key={item.productId} product={product} />
          })}
        </div>
      ) : (
        <Empty description="No products found." />
      )}
    </>
  )
}

export default ProductGrid