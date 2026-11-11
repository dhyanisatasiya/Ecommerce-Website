
import React from 'react';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';

function Navbar({
  search,
  setSearch,
  cartCount,
  onCartClick
}) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">

      <a className="navbar-brand fw-bold fs-3" href="#">
        ShopEasy
      </a>

      <div className="search-box mx-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <FaSearch className="search-icon" />
      </div>

      <button
        className="btn btn-warning cart-button"
        onClick={onCartClick}
      >
        <FaShoppingCart className="me-2" />
        Cart ({cartCount})
      </button>

    </nav>
  );
}

export default Navbar;
