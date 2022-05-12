import "../styles/style.css";
import Slider from "react-slick";
import background1 from "../images/background1.jpeg";
import background2 from "../images/background2.jpeg";
import HomeList from "../HomeList";
import Product from "./Product";
export default function Home({ cart, setCart, onClick }) {
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
        <Product
          cart={cart}
          setCart={setCart}
          onClick={onClick}
          ProductList={HomeList}
          value="Home"
        />
      </div>
    </div>
  );
}
