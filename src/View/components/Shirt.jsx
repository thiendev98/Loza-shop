import "../styles/style.css";
import ShirtList from "../ShirtList";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { useState, useRef } from "react";
defineLordIconElement(loadAnimation);
export default function Shirt({ setCart, cart, addToCart }) {
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  const [position, setPosition] = useState(0);
  const handleClick = (index) => {
    setCurrent(index);
    setDetail(true);
  };
  const returnPage = () => {
    setCurrent(0);
    setDetail(false);
  };
  const myRef = useRef();

  const handleTab = (i) => {
    setPosition(i);
    const images = myRef.current.children;
    for (let j = 0; j < images.length; j++) {
      images[j].className = images[j].className.replace("active", "");
    }
    images[i].className = "active col-xl-2";
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
                    src={shirt.link[0]}
                    onClick={() => handleClick(index)}
                  />

                  <p onClick={() => handleClick(index)}>{shirt.name}</p>
                  <span onClick={() => handleClick(index)}>
                    {shirt.price} đ
                  </span>
                </li>
              )}
              {current === index && detail === true && (
                <li className="detail--item">
                  <div className="row container-fluid">
                    <div className="col-xl-6 detail__img">
                      <img className="item--img" src={shirt.link[position]} />
                    </div>

                    <div className="col-xl-6 detail__info">
                      <h3>
                        {shirt.name}{" "}
                        <span>
                          {" "}
                          <lord-icon
                            src="https://cdn.lordicon.com/slkvcfos.json"
                            trigger="loop"
                            delay="2000"
                            onClick={() => addToCart(shirt)}
                          ></lord-icon>
                        </span>
                      </h3>
                      <span>Mã : {shirt.code}</span>
                      <p>{shirt.price} đ</p>
                      <ul className="row container-fluid" ref={myRef}>
                        {shirt.link.map((img, i) => (
                          <img
                            className="col-xl-2"
                            src={img}
                            onClick={() => handleTab(i)}
                          />
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
