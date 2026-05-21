import React from 'react'
import { ProductItemTypes } from './types'
import './ProductItem.css'

const ProductItem = ({ product }: ProductItemTypes) => {
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
  const isLowStock = product.stock > 0 && product.stock <= 5

  // Helper to render rating stars
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">&#9733;</span>)
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<span key={i} className="star half">&#9733;</span>)
      } else {
        stars.push(<span key={i} className="star">&#9733;</span>)
      }
    }
    return stars
  }

  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img 
          src={product.thumbnail || 'https://via.placeholder.com/280x280?text=Aura+Product'} 
          alt={product.title} 
          className="product-card-image"
          loading="lazy"
        />
        {product.discountPercentage > 0 && (
          <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
        )}
        {isLowStock && (
          <span className="stock-badge low">Only {product.stock} left</span>
        )}
      </div>

      <div className="product-card-content">
        <span className="product-brand">{product.brand || 'Aura Signature'}</span>
        <h3 className="product-title" title={product.title}>{product.title}</h3>
        
        <div className="product-rating">
          <div className="stars-row">{renderStars(product.rating)}</div>
          <span className="rating-val">({product.rating.toFixed(1)})</span>
        </div>

        <p className="product-description">
          {product.description && product.description.length > 80 
            ? `${product.description.slice(0, 80)}...` 
            : product.description}
        </p>

        <div className="product-card-footer">
          <div className="price-container">
            {product.discountPercentage > 0 ? (
              <>
                <span className="discounted-price">${discountedPrice}</span>
                <span className="original-price">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="regular-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button className="add-to-cart-btn" aria-label="Add to cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem