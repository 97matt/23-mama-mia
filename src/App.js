import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import { PizzasProvider } from "./contextAPI/PizzasProvider";
import { Cart } from "./views/Cart";
import PizzaDetails from "./views/PizzaDetails";

export default function App() {
  return (
    <PizzasProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<PizzaDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </PizzasProvider>
  );
}
