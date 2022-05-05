import { useState } from "react";
import Home from "../View/components/Home";
import TShirt from "../View/components/TShirt";
import Shirt from "../View/components/Shirt";
import Skirt from "../View/components/Skirt";
import Vest from "../View/components/Vest";
import Trousers from "../View/components/Trousers";
import { FaFacebook, FaTiktok, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles/style.css";
import logo from "./images/logo.png";
import footerImg from "./images/footer.png";
const PAGE_HOME = "home";
const PAGE_VEST = "vest";
const PAGE_SHIRT = "shirt";
const PAGE_TSHIRT = "tshirt";
const PAGE_SKIRT = "skirt";
const PAGE_TROUSERS = "trousers";
export default function Controller() {
  const [page, setPage] = useState(PAGE_HOME);
  const nextPage = (pages) => setPage(pages);
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
            <li className="navbar__link" onClick={() => nextPage(PAGE_TSHIRT)}>
              Áo phông
            </li>
            <li className="navbar__link" onClick={() => nextPage(PAGE_SHIRT)}>
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
          <div className="navbar__search col-xl-4">
            <input
              className="search__in"
              type="text"
              placeholder="Tìm sản phẩm"
            />
          </div>
          <ul className="navbar--user row container-fluid col-xl-2">
            <li className="user__user col-xl-4">Logo</li>
            <li className="user__heart col-xl-4">Logo</li>
            <li className="user__cart col-xl-4">Logo</li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div id="content--controller">
        {page === PAGE_HOME && <Home />}
        {page === PAGE_SKIRT && <Skirt />}
        {page === PAGE_SHIRT && <Shirt />}
        {page === PAGE_TROUSERS && <Trousers />}
        {page === PAGE_VEST && <Vest />}
        {page === PAGE_TSHIRT && <TShirt />}
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
