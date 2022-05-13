import { useState } from "react";
import $ from "jquery";
import Home from "../View/components/Home";
import TShirt from "../View/components/TShirt";
import Shirt from "../View/components/Shirt";
import Skirt from "../View/components/Skirt";
import Vest from "../View/components/Vest";
import Cart from "../View/components/Cart";
import Trousers from "../View/components/Trousers";
import Login from "../View/pages/User/Login";
import User from "../View/pages/User/User";
import SearchPage from "../View/components/SearchPage";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles/style.css";
import logo from "./images/logo.png";
defineLordIconElement(loadAnimation);
const PAGE_HOME = "home";
const PAGE_VEST = "vest";
const PAGE_SHIRT = "shirt";
const PAGE_TSHIRT = "tshirt";
const PAGE_SKIRT = "skirt";
const PAGE_TROUSERS = "trousers";
const PAGE_CART = "cart";
export default function Controller({ setAdmin }) {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_HOME);
  const [user, setUser] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const nextPage = (pages) => setPage(pages);
  const handleLogin = () => {
    user === true
      ? setPage("userInformation")
      : $("#LoginPage").css("display", "block") &&
        $(".form--warning").css("display", "none");
  };
  const aboutLoza = [
    {
      title: "aboutLoza",
      content: "VỀ LOZA",
    },
    {
      title: "Introduce",
      content: "Giới thiệu",
    },
    {
      title: "sales",
      content: "Tin khuyến mãi",
    },
    {
      title: "notification",
      content: "Thông báo",
    },
  ];
  const supportCustomer = [
    {
      title: "support",
      content: "HỖ TRỢ KHÁCH HÀNG",
    },
    {
      title: "size",
      content: "Hướng dẫn chọn size",
    },
    {
      title: "returnPolicy",
      content: "Chính sách đổi trả",
    },
    {
      title: "delivery",
      content: "Thanh toán và giao nhận",
    },
    {
      title: "security",
      content: "Chính sách bảo mật",
    },
    {
      title: "terms",
      content: "Điều khoản website",
    },
  ];
  const infoContact = [
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/map.svg?1645868209648",
      info: "Khu TMDV Trung Văn 1 - Nam Từ Liêm - Hà Nội ",
    },
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/phone.svg?1645868209648",
      info: "Hotline: 0981.475.666 ",
    },
    {
      logo: "https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/email.svg?1645868209648",
      info: "sale@loza.vn",
    },
  ];
  return (
    <div id="Controller">
      <div id="header">
        <div className="navbar row container-fluid">
          <div
            className="navbar__logo col-xl-1"
            onClick={() => setPage(PAGE_HOME)}
          >
            <img className="logo--img" src={logo} />
          </div>
          <ul className="navbar__list col-xl-5">
            <li className="navbar__link" onClick={() => nextPage(PAGE_SHIRT)}>
              Áo phông
            </li>
            <li className="navbar__link" onClick={() => nextPage(PAGE_TSHIRT)}>
              Áo sơ mi
            </li>
            <li
              className="navbar__link"
              onClick={() => nextPage(PAGE_TROUSERS)}
            >
              Quần
            </li>
            <li className="navbar__link" onClick={() => nextPage(PAGE_SKIRT)}>
              Chân váy
            </li>
            <li className="navbar__link" onClick={() => nextPage(PAGE_VEST)}>
              Vest
            </li>
          </ul>
          <div className="col-xl-1"></div>
          <div className="navbar__search col-xl-4">
            <input
              className="search__in"
              type="text"
              placeholder="Tìm sản phẩm"
              onChange={(event) => {
                $(".search__header").css("display", "flex");
                setSearchProduct(event.target.value);
              }}
            />
            <button
              className="btn btn--search"
              onClick={() => {
                if (searchProduct === "") {
                  setPage(PAGE_HOME);
                } else {
                  setPage("searchPage");
                  $(".search__header").css("display", "flex");
                  $(".product__header").css("display", "none");
                }
              }}
            >
              <img src="https://bizweb.dktcdn.net/100/438/408/themes/848101/assets/search.svg" />
            </button>
          </div>
          <ul className="navbar__user col-xl-1">
            <li className="user--customer">
              <lord-icon
                onClick={() => handleLogin()}
                trigger="hover"
                src="https://cdn.lordicon.com/dxjqoygy.json"
              ></lord-icon>
              <Login
                user={user}
                setUser={setUser}
                setPage={setPage}
                setAdmin={setAdmin}
              />
            </li>
            <li className="user--cart">
              <lord-icon
                src="https://cdn.lordicon.com/slkvcfos.json"
                trigger="hover"
                onClick={() => nextPage(PAGE_CART)}
              ></lord-icon>
              <span>{cart.length}</span>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div id="content--controller">
        {page === PAGE_HOME && <Home setPage={setPage} />}
        {page === PAGE_SKIRT && (
          <Skirt cart={cart} setCart={setCart} setPage={setPage} user={user} />
        )}
        {page === PAGE_SHIRT && (
          <Shirt cart={cart} setCart={setCart} setPage={setPage} user={user} />
        )}
        {page === PAGE_TROUSERS && (
          <Trousers
            cart={cart}
            setCart={setCart}
            setPage={setPage}
            user={user}
          />
        )}
        {page === PAGE_VEST && (
          <Vest cart={cart} setCart={setCart} setPage={setPage} user={user} />
        )}
        {page === PAGE_TSHIRT && (
          <TShirt cart={cart} setCart={setCart} setPage={setPage} user={user} />
        )}
        {page === PAGE_CART && (
          <Cart
            cart={cart}
            setCart={setCart}
            setPage={setPage}
            onClick={handleLogin}
            user={user}
          />
        )}
        {page === "searchPage" && (
          <SearchPage
            cart={cart}
            setCart={setCart}
            setPage={setPage}
            user={user}
            searchProduct={searchProduct}
            setSearchProduct={setSearchProduct}
          />
        )}
        {page === "userInformation" && (
          <User
            user={user}
            setUser={setUser}
            setPage={setPage}
            cart={cart}
            setCart={setCart}
          />
        )}
      </div>
      {/*  */}
      <div id="footer">
        <div className="footer row container-fluid">
          <div className="col-xl-4 footer__logo">
            <p>
              “Website đang trong quá trình vận hành thử nghiệm. Quý khách gặp
              sự cố cần phản ánh có thể gọi/zalo tới 0981.475.666 để được hỗ
              trợ. Rất mong nhận được sự thông cảm. Trân trọng!”
            </p>
            <ul className="footer__list row container-fluid">
              <li className="footer__link col-xl-1">
                <FaFacebook className="icon" />
              </li>
              <li className="footer__link col-xl-1">
                <FaInstagram className="icon" />
              </li>
              <li className="footer__link col-xl-1">
                <FaTwitter className="icon" />
              </li>
              <li className="footer__link col-xl-1">
                <FaTiktok className="icon" />
              </li>
            </ul>
          </div>
          <ul className="col-xl-2 footer__about">
            {aboutLoza.map((about) => (
              <li className="about--item">{about.content}</li>
            ))}
          </ul>
          <ul className="col-xl-2 footer__support">
            {supportCustomer.map((support) => (
              <li className="support--item">{support.content}</li>
            ))}
          </ul>
          <ul className="col-xl-4 footer__info">
            {infoContact.map((info) => (
              <li className="info--item">
                <img className="info--item__img" src={info.logo} />
                {info.info}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
