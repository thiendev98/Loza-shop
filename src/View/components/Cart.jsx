import React from "react";

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    if (amount === 0) {
      removeFromCart(product);
    } else {
      const newCart = [...cart];
      newCart.find((item) => item.name === product.name).quantity = amount;
      setCart(newCart);
    }
  };

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      <h1>Cart</h1>
      {cart.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>{product.price} đ</h4>
            <h4>
              <button
                onClick={() =>
                  setQuantity(
                    product,
                    product.quantity < 1 ? 0 : product.quantity - 1
                  )
                }
              >
                -
              </button>
              quantity: {product.quantity}{" "}
              <button
                onClick={() => setQuantity(product, product.quantity + 1)}
              >
                +
              </button>
            </h4>
            <img src={product.link} alt={product.name} />
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>

      <div>Total Cost: {getTotalSum()} đ</div>
    </>
  );
}
