import React from "react";
import VestList from "../VestList";
import Product from "./Product";
export default function Vest({ key, cart, setCart, setPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        setPage={setPage}
        ProductList={VestList}
        user={user}
        value="Vest"
      />
    </div>
  );
}
