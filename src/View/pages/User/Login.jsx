import React, { useState } from "react";
import "./styles/style.css";
import $ from "jquery";
import { FaGooglePlusG, FaTimes } from "react-icons/fa";
export default function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div id="LoginPage">
      {login === true && (
        <div className="row container-fluid">
          <div className="form--login">
            <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
                setLogin(true);
              }}
            />
            <h4>Đăng nhập</h4>
            <div className="form--item">
              <label>SĐT / Email</label>
              <input type="text" placeholder="Nhập email hoặc số điện thoại" />
            </div>
            <div className="form--item">
              <label>Mật khẩu</label>
              <input type="password" placeholder="Mật khẩu" />
            </div>
            <button className="button--login">Đăng nhập</button>
            <div className="form--login__select">
              <span>Hoặc</span>
            </div>
            <button className="button--login__gg">
              <FaGooglePlusG className="icon__gg" />
              <span> Đăng nhập bằng google</span>
            </button>
            <ul className="row container-fluid">
              <li className="col-6">
                <span onClick={() => setLogin(false)}>
                  Đăng ký tài khoản mới
                </span>
              </li>
              <li className="col-6">
                <span style={{ float: "right" }}>Quên mật khẩu?</span>
              </li>
            </ul>
          </div>
        </div>
      )}
      {login === false && (
        <div className="row container-fluid">
          <div className="form--register">
            <FaTimes
              className="icon__cancel"
              onClick={() => {
                $("#LoginPage").css("display", "none");
                setLogin(true);
              }}
            />
            <h4>Đăng ký</h4>
            <div className="form--item">
              <label>Họ tên</label>
              <input type="text" placeholder="Họ tên..." />
            </div>
            <div className="form--item">
              <label>Số điện thoại</label>
              <input type="text" placeholder="Số điện thoại..." />
            </div>
            <div className="form--item">
              <label>Email</label>
              <input type="text" placeholder="Email..." />
            </div>
            <div className="form--item">
              <label>Mật khẩu</label>
              <input type="password" placeholder="Mật khẩu..." />
            </div>
            <button className="button--register">Đăng ký</button>
            <p>
              {`Bạn đã có tài khoản? `}
              <span onClick={() => setLogin(true)}>Đăng nhập ngay</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
