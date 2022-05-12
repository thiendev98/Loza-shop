import SkirtList from "../SkirtList";
import Product from "./Product";
export default function Skirt({ key, cart, setCart, onClick }) {
  return (
    <div className="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        onClick={onClick}
        ProductList={SkirtList}
        value="Váy nữ"
      />
    </div>
  );
}
