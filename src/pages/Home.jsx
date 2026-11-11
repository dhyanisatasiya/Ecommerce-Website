
import React, { useState } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

function Home({ search, addToCart }) {
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Accessories'
  ];

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === 'All' || product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <>
      <section className="hero-section text-center">
        <h1>Welcome to ShopEasy</h1>
        <p>Discover Amazing Products at Best Prices</p>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
        >
          Shop Now
        </button>
      </section>

      <div className="container my-5" id="products">
        <h2 className="text-center fw-bold mb-4">
          Our Products
        </h2>

        <div className="d-flex justify-content-center gap-2 flex-wrap mb-4">
          {categories.map((item) => (
            <button
              key={item}
              className={`btn ${
                category === item
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              }`}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                <ProductCard
                  product={product}
                  addToCart={addToCart}
                />
              </div>
            ))
          ) : (
            <h4 className="text-center text-secondary">
              No Products Found
            </h4>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
