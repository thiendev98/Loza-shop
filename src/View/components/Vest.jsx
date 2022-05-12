import React from "react";
import VestList from "../VestList";
import Product from "./Product";
export default function Vest({ key, cart, setCart, onClick }) {
  return (
    <div className="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        onClick={onClick}
        ProductList={VestList}
        value="Vest"
      />
    </div>
  );
}
