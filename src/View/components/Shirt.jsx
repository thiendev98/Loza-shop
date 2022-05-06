import "../styles/style.css";
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

      <ul className="shirt__content">
        {ShirtList.map((shirt, index) => {
          return (
            <>
              {current === 0 && detail === false && (
                <li className="content--item">
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
                      <img className="item__img" src={l.img} />
                    ))}
                  </div>
                </li>
              )}
              {current === index && detail === true && (
                <li className="detail--item">
                  <div className="row container-fluid">
                    <div className="col-xl-6 detail__img">
                      <img className="item--img" src={shirt.link} />
                    </div>

                    <div className="col-xl-6 detail__info">
                      <h3>{shirt.name}</h3>
                      <span>Mã : {shirt.code}</span>
                      <p>{shirt.price} đ</p>
                      <ul className="row">
                        {shirt.list.map((l) => (
                          <li className="col-xl-2">
                            <p>{l.color}</p>
                            <img
                              style={{ width: "50px", height: "50px" }}
                              src={l.img}
                            />
                          </li>
                        ))}
                      </ul>
                      <p>Size</p>
                      {shirt.size.map((s) => (
                        <span>{s}</span>
                      ))}
                    </div>
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
