import React from "react";
import { FaTrash } from "react-icons/fa";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
defineLordIconElement(loadAnimation);
export default function Cart({ cart, setCart, setPage, user }) {
  const getTotalSum = () => {
    return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
  };
  const getTotalSumItem = (product) => {
    return product.price * product.quantity;
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
    <div id="CartPage">
      {cart.length === 0 && (
        <div className="cart__empty">
          <img
            className="cart__empty--img"
            src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/blank_cart.svg?1646575637708"
          />
          {user === true ? (
            <>
              <p>Giỏ hàng của bạn trống</p>
              <button onClick={() => setPage("shirt")}>Tiếp tục mua sắm</button>
            </>
          ) : (
            <>
              <p>Bạn cần đăng nhập để mua hàng</p>
              <button onClick={() => setPage("shirt")}>Đăng nhập ngay</button>
            </>
          )}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart__products">
          <div className="row container-fluid">
            <div className="col-xl-9">
              <header>
                <h5>
                  Đơn hàng của bạn <span>({cart.length}) Sản phẩm</span>
                </h5>
              </header>
              <div className="cart__products--header row container-fluid ">
                <div className="col-xl-6">Sản phẩm</div>
                <div className="col-xl-2"> Đơn giá </div>
                <div className="col-xl-2"> Số lượng </div>
                <div className="col-xl-2"> Thành tiền </div>
              </div>
              {cart.map((product, idx) => (
                <div
                  className="row container-fluid cart__products--item"
                  key={idx}
                >
                  <div className="col-xl-6 row container-fluid">
                    <img className="col-xl-2" src={product.link} />
                    <div className="col-xl-10">
                      <p className="cart__products--item__name">
                        {product.name}
                      </p>
                      <div className="cart__products--item__size">
                        <span>{`${product.color} / ${product.size}`}</span>
                      </div>
                      <button
                        className="btn--remove"
                        onClick={() => removeFromCart(product)}
                      >
                        <FaTrash className="icon__trash" />
                        <span>Xóa</span>
                      </button>
                    </div>
                  </div>
                  <div className="col-xl-2 cart__products--item__price">
                    <span> {product.price} đ</span>
                  </div>
                  <div className="col-xl-2 cart__products--item__quatity">
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
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => setQuantity(product, product.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="col-xl-2 cart__products--item__total">
                    {getTotalSumItem(product)} đ{" "}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart__products--payment col-xl-3">
              <div className="payment--title">
                <lord-icon
                  className="icon__truck--kun"
                  trigger="loop"
                  src="https://cdn.lordicon.com/uetqnvvg.json"
                ></lord-icon>
                <p>Giao hàng siêu tốc</p>
                <p>
                  {getTotalSum() >= 498000
                    ? "Miễn phí giao hàng"
                    : `Mua thêm ${
                        498000 - getTotalSum()
                      }đ để được miễn phí giao hàng`}
                </p>
              </div>
              <div className="payment--total">
                <p>Tổng tiền:</p>
                <span>{getTotalSum()} đ</span>
              </div>
              <button>Đặt hàng</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
