import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
const endpoint = "/pizzas.json";

const PizzaContext = createContext();

const PizzasProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = async () => {
    const res = await axios.get(endpoint);
    setPizzas(res.data);
  };

  const getPizza = (id) => {
    const pizza = pizzas.find((p) => p.id === id);
    return pizza;
  };

  const addToCart = (id) => {
    const _pizza = getPizza(id);
    setCart([...cart, _pizza]);
  };

  const getTotalPrice = () => {
    const totalPrice = cart.reduce((total, p) => total + p.price, 0);
    return totalPrice;
  };

  return (
    <PizzaContext.Provider
      value={{ pizzas, cart, getPizza, addToCart, getTotalPrice }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export { PizzasProvider };
export default PizzaContext;
