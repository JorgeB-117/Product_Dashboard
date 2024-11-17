// Task 2: Create the App Component

import React, { useState } from 'react'
import './App.css'
import ProductList from './Components/ProductList/ProductList'
import AddProductForm from './Components/AddProductForm/AddProductForm'

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Macbook Pro",
      price: 1299.99,
      description: "Most powerful laptop"
    },
    {
      id: 2,
      name: "Airpods",
      price: 179.99,
      description: "Earbuds with noise cancellation"
    },
    {
      id: 3,
      name: "iPhone",
      price: 949.99,
      description: "Most powerful phone"
    },
    {
      id: 4,
      name: "iPad",
      price: 729.99,
      description: "Best for Education"
    }
  ])

// Task 7: Pass Data Between Components

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct])
  }

  const removeProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId))
  }

  return (
    <div className='app-container'>
      <h1>Product Dashboard</h1>
      <AddProductForm addProduct={addProduct} />
      <ProductList 
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  )
}

export default App