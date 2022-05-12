import React from "react";
import TShirtList from "../TShirtList";
import Product from "./Product";
export default function TShirt({ key, cart, setCart, setPage, user }) {
  return (
    <div id="TrousersPage">
      <Product
        cart={cart}
        setCart={setCart}
        setPage={setPage}
        ProductList={TShirtList}
        user={user}
        value="Áo sơ mi nữ"
      />
    </div>
  );
}
