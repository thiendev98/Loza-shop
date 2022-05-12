import React from "react";
import TrousersList from "../TrousersList";
import Product from "./Product";
export default function Trousers({ key, cart, setCart, onClick }) {
  return (
    <div className="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        onClick={onClick}
        ProductList={TrousersList}
        value="Quần nữ"
      />
    </div>
  );
}
