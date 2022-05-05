import { useState } from "react";
import Home from "../View/components/Home";
import TShirt from "../View/components/TShirt";
import Shirt from "../View/components/Shirt";
import Skirt from "../View/components/Skirt";
import Vest from "../View/components/Vest";
import Trousers from "../View/components/Trousers";
import "./styles/style.css";
import logo from "./images/logo.png";
const PAGE_HOME = "home";
const PAGE_VEST = "vest";
const PAGE_SHIRT = "shirt";
const PAGE_TSHIRT = "tshirt";
const PAGE_SKIRT = "skirt";
const PAGE_TROUSERS = "trousers";
export default function Controller() {
  const [page, setPage] = useState(PAGE_HOME);
  const nextPage = (pages) => setPage(pages);
  return (
    <div id="Controller">
      <div id="header">
        <div className="navbar row container-fluid">
          <div
            className="navbar--logo col-xl-1"
            onClick={() => setPage(PAGE_HOME)}
          >
            <img className="logo__img" src={logo} />
          </div>
          <ul className="navbar--list col-xl-5">
            <li className="navbar--link" onClick={() => nextPage(PAGE_TSHIRT)}>
              Áo phông
            </li>
            <li className="navbar--link" onClick={() => nextPage(PAGE_SHIRT)}>
              Áo sơ mi
            </li>
            <li
              className="navbar--link"
              onClick={() => nextPage(PAGE_TROUSERS)}
            >
              Quần
            </li>
            <li className="navbar--link" onClick={() => nextPage(PAGE_SKIRT)}>
              Chân váy
            </li>
            <li className="navbar--link" onClick={() => nextPage(PAGE_VEST)}>
              Vest
            </li>
          </ul>
          <div className="navbar--search col-xl-4">Search</div>
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
      <div id="footer">Footer</div>
    </div>
  );
}
