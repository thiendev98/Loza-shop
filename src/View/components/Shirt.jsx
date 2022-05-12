import ShirtList from "../ShirtList";
import Product from "./Product";
export default function Shirt({ key, cart, setCart, setPage, user }) {
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        setPage={setPage}
        ProductList={ShirtList}
        user={user}
        value="Áo phông nữ"
      />
    </div>
  );
}
