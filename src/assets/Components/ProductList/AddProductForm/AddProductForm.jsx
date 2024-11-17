// Task 6: Create the AddProductForm Component

import React, { useState } from 'react'

function AddProductForm({ addProduct }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (price <= 0) {
      setError('Price must be greater than 0')
      return
    }

    try {
      setIsSubmitting(true)
      const newProduct = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        description
      }
      
      addProduct(newProduct)
      
      // Reset form
      setName('')
      setPrice('')
      setDescription('')
      
    } catch (err) {
      setError('Failed to add product')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="add-product-container">
      {error && <p className="error-message">{error}</p>}
      
      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            min="0.01"
            step="0.01"
            className="form-input"
          />
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="form-input"
          />
        </div>
        
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}

export default AddProductForm