import React from "react";
import TShirtList from "../TShirtList";
import Product from "./Product";
export default function TShirt({ key, cart, setCart, onClick }) {
  return (
    <div className="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        onClick={onClick}
        ProductList={TShirtList}
        value="Áo sơ mi nữ"
      />
    </div>
  );
}
