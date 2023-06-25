import React, { useContext } from "react";
import PizzaContext from "../contextAPI/PizzasProvider";

export const Cart = () => {
  const { cart, getTotalPrice } = useContext(PizzaContext);
  return (
    <div className="cartContainer">
      <p>Detalles del pedido:</p>
      <div className="cartItems">
        {cart?.map((p) => (
          <div key={p.id} className="cartItem">
            <div className="first">
              <img src={p.img} alt={p.name} />
              <p>{p.name}</p>
            </div>
            <div className="second">
              <p>${p.price}</p>
            </div>
          </div>
        ))}
        <p>Tottal: ${getTotalPrice()}</p>
        <button className="addToCart">Pay</button>
      </div>
    </div>
  );
};
