import "../styles/style.css";
import $ from "jquery";
import ShirtList from "../ShirtList";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { useState } from "react";
defineLordIconElement(loadAnimation);
export default function Shirt({ setCart, cart, addToCart }) {
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  const handleClick = (index) => {
    setCurrent(index);
    setDetail(true);
  };
  const returnPage = () => {
    setCurrent(0);
    setDetail(false);
  };

  return (
    <div id="ShirtPage">
      <div className="shirt__header">
        <span>
          Trang chủ / <span onClick={() => returnPage()}>Áo phông nữ</span>
        </span>
      </div>
      <div className="shirt__content">
        <ul className="content__list">
          {ShirtList.map((shirt, index) => {
            return (
              <>
                {current === 0 && detail === false && (
                  <li className="col-xl-12d5">
                    <img
                      className="list__img"
                      src={shirt.link}
                      onClick={() => handleClick(index)}
                    />
                    <p onClick={() => handleClick(index)}>{shirt.name}</p>
                    <span onClick={() => handleClick(index)}>
                      {shirt.price} đ
                    </span>
                    <lord-icon
                      src="https://cdn.lordicon.com/slkvcfos.json"
                      trigger="loop"
                      delay="2000"
                      onClick={() => addToCart(shirt)}
                    ></lord-icon>
                    <div className="list--item">
                      {shirt.list.map((l) => (
                        <img className="item__img" src={l} />
                      ))}
                    </div>
                  </li>
                )}
                {current === index && detail === true && (
                  <div id="DetailPage">{shirt.name}</div>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
