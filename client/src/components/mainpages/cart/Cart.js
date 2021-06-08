import React, { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import PaypalButton from "./PaypalButton";

function Cart(props) {
  const state = useContext(GlobalState);
  console.log("state: ", state);
  const [cart, setCart] = state.userAPI.cart;
  console.log("cart: ", cart);
  const [token] = state.token;
  const [total, setTotal] = useState(0);

  let MMM;

  const getUser = async () => {
    const res = await axios.get("/user/infor", {
      headers: { Authorization: token },
    });

    MMM = res.data?.email;
  };

  getUser();

  const ggg = async () => {
    const formData = new FormData();
    formData.append("название", "новый заказ");
    if (cart) {
      for (let i = 0; i < cart.length; i++) {
        formData.append("животные", cart[i].title);
      }
    }
    formData.append("заказал", MMM);
    try {
      const response = await fetch("https://formspree.io/f/xeqvapaw", {
        method: "POST",
        body: formData,
      });
    } catch (error) {}
    clear();
  };

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const increment = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const decrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const removeProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  const clear = () => {
    setCart([]);
    addToCart(cart);
  };

  const tranSuccess = async (payment) => {
    const { paymentID, address } = payment;

    await axios.post(
      "/api/payment",
      { cart, paymentID, address },
      {
        headers: { Authorization: token },
      }
    );

    setCart([]);
    addToCart([]);
    alert("You have successfully placed an order.");
  };

  if (cart.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Корзина пуста!</h2>
    );

  return (
    <div>
      {cart.map((product) => (
        <div className="detail cart" key={product._id}>
          <img src={product.images.url} alt="" />

          <div className="box-detail">
            <h2>{product.title}</h2>

            <h3>$ {product.price * product.quantity}</h3>
            <p>{product.description}</p>
            <p>{product.content}</p>

            <div className="amount">
              <button onClick={() => decrement(product._id)}> - </button>
              <span>{product.quantity}</span>
              <button onClick={() => increment(product._id)}> + </button>
            </div>

            <div className="delete" onClick={() => removeProduct(product._id)}>
              X
            </div>
          </div>
        </div>
      ))}

      <div className="total">
        <h3>Общее: $ {total}</h3>
        <button className="or" onClick={ggg}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default Cart;
