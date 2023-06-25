import React, { useContext } from "react";
import PizzaContext from "../contextAPI/PizzasProvider";
import Pizza from "./Pizza";

const Pizzas = () => {
  const { pizzas } = useContext(PizzaContext);

  return (
    <div className="card-container">
      {pizzas.map((p) => (
        <Pizza key={p.id} pizza={p} />
      ))}
    </div>
  );
};

export default Pizzas;
