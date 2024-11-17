import React from 'react'

function ProductItem({ product, removeProduct }) {
  return (
    <li className="product-item">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
      </div>
      <button
        onClick={() => removeProduct(product.id)}
        className="remove-btn"
      >
        Remove
      </button>
    </li>
  )
}

export default ProductItem