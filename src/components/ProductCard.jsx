
import React from 'react';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="p-3">
        <h5>{product.name}</h5>

        <p className="text-secondary">
          {product.category}
        </p>

        <div className="text-warning mb-2">
          <FaStar /> {product.rating}
        </div>

        <h5 className="text-primary">
          ₹{product.price}
          <del className="text-secondary ms-2 fs-6">
            ₹{product.oldPrice}
          </del>
        </h5>

        <button
          className="btn btn-primary w-100 mt-2"
          onClick={() => addToCart(product)}
        >
          <FaShoppingCart className="me-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
