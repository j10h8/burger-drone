import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";

function Burger(props) {
  const [menuItem, setMenuItem] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setMenuItem(props.burger);
  }, [props.burger]);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function addToCart() {
    let cart = localStorage.getItem("cart");
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    cart.push(menuItem);
    localStorage.setItem("cart", JSON.stringify(cart));
    openModal();
  }

  return (
    <div>
      <div className='menu-item-card'>
        <h1>{props.burger.title}</h1>
        <h1>${props.burger.price}</h1>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <img
            src={props.burger.image}
            className='menu-image'
            alt={"Menu item"}
          />
          <div className='center-items'>
            <h2>Toppings</h2>
            {props.burger.toppings ? (
              <div>
                {props.burger.toppings.map((topping, index) => (
                  <h3 key={index}>{topping}</h3>
                ))}
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
        <div>
          <button className='add-to-cart-btn' onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className='modal'>
        <h1>A</h1>
        <h1>* {props.burger.title} *</h1>
        <h1>was added to your cart!</h1>
        <button
          onClick={closeModal}
          className='add-to-cart-btn'
          style={{ width: "auto", fontSize: "1.3rem" }}
        >
          Close
        </button>
        <Link to={"/cart"}>
          <button
            onClick={closeModal}
            className='add-to-cart-btn'
            style={{ width: "auto", fontSize: "1.3rem" }}
          >
            Go to cart
          </button>
        </Link>
      </Modal>
    </div>
  );
}

export default Burger;
