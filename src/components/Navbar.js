import { useContext } from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import PizzaContext from "../contextAPI/PizzasProvider";

export default function Navbar() {
  const { getTotalPrice } = useContext(PizzaContext);
  return (
    <nav className="navbar">
      <Link to="/">🍕 Pizzeria Mama Mia! </Link>
      <Link to="/cart">🛒 ${getTotalPrice()} </Link>
    </nav>
  );
}
