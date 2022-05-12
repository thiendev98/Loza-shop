import ShirtList from "../ShirtList";
import Product from "./Product";
export default function Shirt({ key, cart, setCart, onClick }) {
  return (
    <div className="ShirtPage">
      <Product
        cart={cart}
        setCart={setCart}
        onClick={onClick}
        ProductList={ShirtList}
        value="Áo phông nữ"
      />
    </div>
  );
}
