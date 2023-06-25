import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PizzaContext from "../contextAPI/PizzasProvider";

const PizzaDetails = () => {
  const { id } = useParams();
  const { getPizza, addToCart } = useContext(PizzaContext);
  const goTo = useNavigate();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const p = getPizza(id);
    if (p) {
      // set product details here
      setPizza(p);
    } else {
      goTo("/");
    }
  }, []);

  return (
    <div className="pizzaDetailsCard">
      <img src={pizza?.img} alt={pizza?.name} />

      <div className="content">
        <p className="title">{pizza?.name}</p>
        <hr />
        <p>{pizza?.desc}</p>
        <p className="title">Ingredients</p>
        <div className="ingredients">
          {pizza?.ingredients.map((ing, i) => (
            <p key={i}>🍕 {ing}</p>
          ))}
        </div>
        <div className="priceBtn">
          <p className="title">Price: ${pizza?.price}</p>
          <button onClick={() => addToCart(pizza?.id)} className="addToCart">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
