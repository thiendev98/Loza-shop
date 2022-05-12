import SkirtList from "../SkirtList";
import Product from "./Product";
export default function Skirt({ key, cart, setCart, setPage, user }) {
  return (
    <div id="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        setPage={setPage}
        ProductList={SkirtList}
        user={user}
        value="Váy nữ"
      />
    </div>
  );
}
