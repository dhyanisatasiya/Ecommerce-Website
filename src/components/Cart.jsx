
import React from 'react';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';

function Cart({
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
  totalPrice,
  onContinueShopping
}) {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">
        <FaShoppingBag className="me-2" />
        Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart text-center">
          <h3>Your Cart is Empty!</h3>
          <p className="text-secondary">
            Add some products to your cart.
          </p>
          <button
            className="btn btn-primary"
            onClick={onContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="row">
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h5>{item.name}</h5>
                  <p>₹{item.price}</p>

                  <div className="quantity-control">
                    <button onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </div>

                  <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => removeProduct(item.id)}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>

                <h6>₹{item.price * item.quantity}</h6>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="cart-summary">
              <h4>Order Summary</h4>
              <hr />

              <p>Subtotal: ₹{totalPrice}</p>
              <p className="text-success">Delivery: FREE</p>

              <hr />

              <h5>Total: ₹{totalPrice}</h5>

              <button className="btn btn-primary w-100 mt-3">
                Proceed to Checkout
              </button>

              <button
                className="btn btn-outline-dark w-100 mt-2"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
