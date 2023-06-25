import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import PizzaContext from "../contextAPI/PizzasProvider";

const Pizza = ({ pizza }) => {
  const goTo = useNavigate();
  const { addToCart } = useContext(PizzaContext);
  const { id, name, desc, img, ingredients, price } = pizza;

  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-content">
        <p className="title">{name}</p>
        <hr />
        <p>Ingredients</p>
        <div className="ingredients">
          {ingredients.map((ing, i) => (
            <p key={i}>🍕 {ing}</p>
          ))}
        </div>
        <hr />
        <div className="cta">
          <p>${price}</p>
          <div>
            <button onClick={() => goTo(`/pizza/${id}`)} className="view">
              Ver Mas 👀
            </button>
            <button onClick={() => addToCart(id)} className="addToCart">
              Añadir 🛒
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
