import "../styles/style.css";
import Slider from "react-slick";
import background1 from "../images/background1.jpeg";
import background2 from "../images/background2.jpeg";
import HomeList from "../HomeList";
import Product from "./Product";
export default function Home({ setPage }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2500,
    cssEase: "linear",
  };
  const handleClick = (i) => {
    if (i >= 0 && i <= 3) {
      setPage("vest");
    } else if (i > 3 && i <= 9) {
      setPage("trousers");
    } else if (i > 9 && i <= 15) {
      setPage("shirt");
    } else if (i > 15 && i <= 18) {
      setPage("tshirt");
    } else if (i > 18 && i <= 22) {
      setPage("shirt");
    } else {
    }
  };
  const backgroundList = [background1, background2];
  return (
    <div id="HomePage">
      <div className="wrapper">
        <Slider {...settings}>
          {backgroundList.map((background) => (
            <img className="wapper__img" src={background} />
          ))}
        </Slider>
      </div>
      <div className="container">
        <h3>Mua gì hôm nay?</h3>
        <ul className="home__content row container-fluid">
          {HomeList.map((list, i) => (
            <li className="col-xl-3 home__content--item">
              <div className="item__list">
                <img
                  className="list__img"
                  src={list.link[0]}
                  onClick={() => handleClick(i)}
                />
                <img
                  className="list__img--hover"
                  src={list.link[1]}
                  onClick={() => handleClick(i)}
                />
              </div>
              <p onClick={() => handleClick(i)}>{list.name}</p>
              <span onClick={() => handleClick(i)}>{list.price} đ</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
