
import React, { useState } from 'react';

import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Cart from './components/Cart.jsx';

import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add Product To Cart
  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingProduct = previousItems.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousItems, { ...product, quantity: 1 }];
    });
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Product
  const removeProduct = (id) => {
    setCartItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  // Total Cart Quantity
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total Price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
      />

      {showCart ? (
        <Cart
          cartItems={cartItems}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
          totalPrice={totalPrice}
          onContinueShopping={() => setShowCart(false)}
        />
      ) : (
        <Home
          search={search}
          addToCart={addToCart}
        />
      )}

      <footer className="footer">
        <h4>ShopEasy</h4>
        <p>Online Shopping Made Easy!</p>
        <p>© 2026 ShopEasy. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
