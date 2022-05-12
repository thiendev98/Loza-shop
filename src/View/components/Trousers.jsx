import React from "react";
import TrousersList from "../TrousersList";
import Product from "./Product";
export default function Trousers({ key, cart, setCart, setPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        setPage={setPage}
        ProductList={TrousersList}
        user={user}
        value="Quần nữ"
      />
    </div>
  );
}
