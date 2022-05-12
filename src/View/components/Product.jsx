import "../styles/style.css";
import ShirtList from "../ShirtList";
import $ from "jquery";
import { FaTimes } from "react-icons/fa";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { useState, useRef } from "react";
defineLordIconElement(loadAnimation);
export default function Shirt({ setCart, cart, onClick }) {
  const [current, setCurrent] = useState(0);
  const [detail, setDetail] = useState(false);
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState(0);
  const [size, setSize] = useState(99);
  const [about, setAbout] = useState(0);
  const myRefImage = useRef();
  const myRefSize = useRef();
  const handleClick = (index) => {
    setCurrent(index);
    setDetail(true);
  };
  const returnPage = () => {
    setCurrent(0);
    setDetail(false);
  };
  const addToCart = (product) => {
    var products = {
      code: product.code,
      name: product.name,
      price: product.price,
      link: product.link[position],
      color: product.color[color],
      size: product.size[size],
    };
    if (size === 99) alert("Bạn vui lòng chọn size trước khi đặt hàng");
    else {
      let newCart = [...cart];
      let itemInCart = newCart.find(
        (item) =>
          products.code === item.code &&
          products.size === item.size &&
          products.color === item.color
      );
      if (itemInCart) {
        alert("Bạn đã thêm sản phẩm này vào giỏ hàng");
      } else {
        itemInCart = {
          ...products,
          quantity: 1,
        };
        newCart.push(itemInCart);
        alert("Bạn vừa thêm thành công sản phẩm vào giỏ hàng");
      }
      setCart(newCart);
    }
  };
  const listContent = [
    "<p>Bạn có thể thanh toán cho người giao hàng mà không cần chịu phí thu tiền hộ (COD).</p> <p>Tóm tắt chính sách giao hàng COD:</p><p>① Loza hỗ trợ được kiểm tra hàng trước khi thanh toán nhưng không mặc thử đồ</p><p>② Loza không gửi đơn hàng COD nếu bạn có đơn hàng khác sử dụng COD mà chưa nhận hàng</p><p>③ Người giao hàng (bưu tá) không phải là nhân viên của Loza, vui lòng liên hệ với Loza theo số hotline trên bì hàng để được hỗ trợ các vấn đề khác④ Sản phẩm đúng với hình ảnh và mô tả nhưng nếu không ưng ý hoặc vì lý do nào khác khiến bạn từ chối nhận hàng, vui lòng hỗ trợ Loza <b>30.000đ</b> cước phí vận chuyển chiều về qua nhân viên phát hàng, bởi thực tế giá trị cước phí Loza gửi hàng chiều đi và về lớn hơn 30k khá nhiều. Rất mong nhận được sự thông cảm! </p>",

    "<p><b>① Chính sách đổi hàng:</b>  Loza hỗ trợ bạn đổi hàng trong vòng 10 ngày </p><p>Yêu cầu sản phẩm đổi:</p><p>1. Các sản phẩm nhận được trong vòng 10 ngày kể từ ngày giao hàng</p><p>2. Các sản phẩm gửi đổi phải chưa qua sử dụng, không bị hư hỏng, không có mùi cơ thể, mùi lạ (nước hoa, hoá chất giặt), còn đủ nhãn mác và túi nylon đựng hàng</p><p>3. Phí vận chuyển hàng đổi được hỗ trợ bởi Loza với chiều trả hàng đổi, bạn vui lòng thanh toán cước vận chuyển chiều gửi về kho của Loza. Với sản phẩm giảm giá trên 20% hoặc lần đổi hàng thứ 2 với cùng đơn hàng bạn sẽ phải trả cước phí vận chuyển 2 chiều.</p> <p><b>② Chính sách trả hàng:</b>  Loza hỗ trợ bạn trả hàng và hoàn tiền trong trường hợp sản phẩm bị lỗi sản xuất, hoặc nhân viên Loza đóng gói sai sản phẩm.</p><p>Rất mong bạn thông cảm và kiên trì chờ đợi các khâu xác nhận và xử lý hoàn tiền, bởi con người ai cũng có thể có lúc nhầm lẫn, chúng tôi luôn ý thức và hạn chế hết mức điều này xảy ra. </p>",

    "<p>Loza đang miễn phí vận chuyển với các đơn hàng có Tổng giá trị thanh toán ≥ 498.000đ</p><p> *Các đơn hàng không đủ điều kiện miễn phí vận chuyển Loza có thể áp dụng phí cố định <b>30.000đ/đơn hàng</b>. Vui lòng đặt hàng và điền thông tin địa chỉ ở mục Thanh toán nhận để cập nhật chính xác về cước phí vận chuyển của đơn hàng.</p>",

    "<p>Các khuyến mại mua nhiều giảm sâu đang áp dụng:</p><p>- Mua 2 áo phông giá ưu đãi từ 199k/c- Mua 2 áo quần short bất kỳ giá chỉ còn 299k/c </p><p> - Đơn hàng từ 500k giảm thêm 50k- Đơn hàng từ 1.000k giảm thêm 100k</p><p>- Đơn hàng từ 1.500k giảm thêm 150k</p><p>- Miễn phí vận chuyển cho đơn hàng từ 498k</p><p>*Bạn có thể mua 'chéo' 2 sản phẩm khác loại (vd: 1 áo phông + 1 quần short) để nhận ưu đãi tương tự.</p>",
  ];
  const listSevice = [
    {
      key: 1,
      title: "Thanh toán khi nhận hàng",
      text: "Được kiểm tra hàng trước",
      img: "https://statics.pancake.vn/web-media/ef/25/e7/64/bcb41fe4a59e764ca4280e56df5d5199524c1ae239a710fb47527ee5.png",
    },
    {
      key: 2,
      title: "Đổi hàng 10 ngày",
      text: "Nhấn để xem chính sách",
      img: "https://statics.pancake.vn/web-media/da/6b/3d/bc/3426639dcb8260e5384d95025943173cb5ebb6327358e4b88a559313.png",
    },
    {
      key: 3,
      title: "Miễn phí vận chuyển",
      text: "Đơn hàng từ 498k",
      img: "https://statics.pancake.vn/web-media/9b/e9/3b/a7/d77af40cdd8d935ae1c579ae16e1fcb0b12654f469e18bac5ef05cc6.png",
    },
    {
      key: 4,
      title: "Mua nhiều giảm sâu",
      text: "Nhấn để xem chi tiết",
      img: "https://statics.pancake.vn/web-media/67/35/4f/14/83d7cbdc34d02750b2704078bcf7711355e817d0780e97175417f041.png",
    },
  ];
  const handleClickImages = (i) => {
    setPosition(i);
    setColor(i);
    const images = myRefImage.current.children;
    for (let j = 0; j < images.length; j++) {
      images[j].className = images[j].className.replace(
        "active col-xl-3 detail__info--img",
        "col-xl-3 detail__info--img"
      );
    }
    images[i].className = "active col-xl-3 detail__info--img";
    $(".detail__info--img").css({ border: "1px solid #dde1ef", color: "#000" });
    $(".detail__info--img.active").css({
      border: "2px solid #f08522",
      color: "#f08522",
    });
  };
  const handleClickSize = (i) => {
    setSize(i);
    const sizes = myRefSize.current.children;
    for (let j = 0; j < sizes.length; j++) {
      sizes[j].className = sizes[j].className.replace(
        "item--size active",
        "item--size"
      );
    }
    sizes[i].className = "item--size active";
    $(".item--size").css({ border: "1px solid #dde1ef", color: "#000" });
    $(".item--size.active").css({
      border: "2px solid #f08522",
      color: "#f08522",
    });
  };
  const handleHideInfo = () => {
    $(".detail--service__info").css("display", "none");
  };
  const handleShowInfo = (i) => {
    setAbout(i);
    $(".detail--service__info").css("display", "block");
  };

  return (
    <div id="ShirtPage">
      <div className="shirt__header">
        <span onClick={onClick}>Trang chủ </span>/
        <span onClick={() => returnPage()}> Áo phông nữ</span>
      </div>

      <ul className="shirt__content">
        {ShirtList.map((shirt, index) => {
          return (
            <>
              {current === 0 && detail === false && (
                <li className="content--item">
                  <div className="item__list">
                    <img
                      className="list__img"
                      src={shirt.link[0]}
                      onClick={() => handleClick(index)}
                    />
                    <img
                      className="list__img--hover"
                      src={shirt.link[1]}
                      onClick={() => handleClick(index)}
                    />
                  </div>
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
                      <h3>{shirt.name}</h3>
                      <p className="detail__info--code">Mã : {shirt.code}</p>
                      <p className="detail__info--price">{shirt.price} đ</p>
                      <p className="detail__info--color">
                        Màu: <span>{shirt.color[color]}</span>
                      </p>
                      <div className="row container-fluid" ref={myRefImage}>
                        {shirt.link.map((img, i) => (
                          <>
                            <img
                              className="col-xl-3 detail__info--img"
                              src={img}
                              onClick={() => handleClickImages(i)}
                            />
                          </>
                        ))}
                      </div>
                      <p className="detail__info--size">
                        Size: <span>{shirt.size[size]}</span>
                      </p>
                      <ul className="detail__info--size__list" ref={myRefSize}>
                        {shirt.size.map((s, i) => (
                          <li
                            className="item--size"
                            onClick={() => handleClickSize(i)}
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                      <div className="detail__info--button row container-fluid">
                        <button
                          className="col-xl-6 btn--add__cart"
                          onClick={() => addToCart(shirt)}
                        >
                          Thêm vào giỏ hàng
                        </button>
                        <button className="col-xl-6 btn--buy__now">
                          Mua ngay
                        </button>
                      </div>

                      <div className="detail--item__info row container-fluid">
                        {listSevice.map((service, i) => (
                          <div className="col-xl-6 row container-fluid information--item">
                            <img
                              className="col-xl-3 service__img"
                              src={service.img}
                            />
                            <div className="col-xl-9">
                              <p>
                                <b>{service.title}</b>
                              </p>
                              <p
                                onClick={() => handleShowInfo(i)}
                                style={{ color: "cadetblue" }}
                              >
                                {service.text}
                              </p>
                              <div className="detail--service__info">
                                <div className="detail--service__info--item">
                                  <FaTimes
                                    className="icon__cancel"
                                    onClick={() => handleHideInfo()}
                                  />
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: listContent[about],
                                    }}
                                  ></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
