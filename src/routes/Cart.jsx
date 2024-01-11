import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [updatedCart, setUpdatedCart] = useState([]);
  const [total, setTotal] = useState(0);

  function getCart() {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    setCart(cart);
  }

  function getTotal() {
    let total = 0;
    cart.forEach((cartItem) => {
      total += cartItem.price * 100; // Multiply and later divide by 100 to avoid floating point errors
    });
    total /= 100;
    setTotal(total.toFixed(2));
  }

  useEffect(() => {
    getCart();
  }, [updatedCart]);

  useEffect(() => {
    getTotal();
  }, [cart]);

  function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    setUpdatedCart(cart);
  }

  return (
    <div className='center-items'>
      {cart.length === 0 ? (
        <h1 className='cart-page-title'>Your cart is empty</h1>
      ) : (
        <h1 className='cart-page-title'>Your cart</h1>
      )}
      <div className='cart-items-container'>
        {cart.map((cartItem, index) => (
          <div key={index} className='cart-item-card'>
            <div>
              <h2>{cartItem.title}</h2>
              <h2>${cartItem.price}</h2>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <button
                onClick={() => removeFromCart(index)}
                className='remove-from-cart-btn'
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        {cart.length > 0 && <h2 style={{ marginTop: "0.5rem" }}>${total}</h2>}
      </div>
      {cart.length > 0 && (
        <Link to={"/checkout"}>
          <button className='add-to-cart-btn' style={{ marginTop: "3rem" }}>
            Checkout
          </button>
        </Link>
      )}
      {cart.length > 0 && (
        <Link to={"/menu"}>
          <button
            className='add-to-cart-btn'
            style={{ marginTop: "1rem", marginBottom: "2rem" }}
          >
            Menu
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
