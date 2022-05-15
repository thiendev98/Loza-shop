import "../styles/style.css";
import Slider from "react-slick";
import background1 from "../images/background1.jpeg";
import background2 from "../images/background2.jpeg";
import HomeList from "../HomeList";
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
          {HomeList.map((product, i) => (
            <li className="col-xl-3 home__content--item">
              <div className="item__list">
                <img
                  className="list__img"
                  src={product.link[0]}
                  onClick={() => setPage(product.type)}
                />
                <img
                  className="list__img--hover"
                  src={product.link[1]}
                  onClick={() => setPage(product.type)}
                />
              </div>
              <p onClick={() => setPage(product.type)}>{product.name}</p>
              <span onClick={() => setPage(product.type)}>
                {product.price} đ
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
