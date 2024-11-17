// Task 3: Create the ProductList Component

import React from 'react'
import ProductItem from './ProductItem'

// Task 5: Implement Keys in the ProductList Component

function ProductList({ products, removeProduct }) {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductItem 
            key={product.id}
            product={product}
            removeProduct={removeProduct}
          />
        ))}
      </ul>
    </div>
  )
}

export default ProductList