import React, { useEffect } from "react";
import { listProduct } from "./fetchData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faGift,
  faFire,
  faStar,
  faMicrochip,
  faLaptop,
  faAngleRight,
  faDesktop,
  faKeyboard,
  faMouse,
  faComputerMouse,
  faHeadphones,
  faPrint,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";
import CardItem from "./CardItem";
import { faAppStore, faApple } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  // Multiple slide carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Home">
      {/* Home SideNBar */}
      <div className="Home_sidebar row mb-2">
        <div className="Home_sidebar-sidebar col-2">
          <ul>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faLaptop} fontSize={14} />
                <h5>Laptop</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faLaptop} fontSize={14} />
                <h5>Laptop Gaming</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faDesktop} fontSize={14} />
                <h5>PC GearnVN</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faDesktop} fontSize={14} />
                <h5>Main- CPU - VGA</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faDesktop} fontSize={14} />
                <h5>Case - Nguồn - Phụ kiện</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faMicrochip} fontSize={14} />
                <h5>SSD- RAM- HDD</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faApple} fontSize={14} />
                <h5>Apple</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faDesktop} fontSize={14} />
                <h5>Màn hình</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faKeyboard} fontSize={14} />
                <h5>Bàn phím</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faComputerMouse} fontSize={14} />
                <h5>Chuột + Lót chuột</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faHeadphones} fontSize={14} />
                <h5>Tai nghe - Loa</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faPrint} fontSize={14} />
                <h5>Phần mềm + Mạng</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faGamepad} fontSize={14} />
                <h5>Phụ kiện</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
            <li className="Home_sidebar-sidebar-li">
              <a href="/product">
              <div>
                <FontAwesomeIcon icon={faGift} fontSize={14} />
                <h5>Thủ thuật - Giải đáp</h5>
              </div>
              <FontAwesomeIcon icon={faAngleRight} />
              </a>
            </li>
          </ul>
        </div>
        <div className=" col-10">
          <div className="row">
            <div
              id="carouselExampleIndicators"
              className="Home_sidebar-bigslide carousel slide col-8"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <a href="/product">
                    <img
                      src="https://file.hstatic.net/200000722513/file/laptop_black_friday_788060f995674e7a989b01df267763a2.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="/product">
                    <img
                      src="https://file.hstatic.net/200000722513/file/6_20f8dbf6da254794805e8449bcff3adb.png"
                      class="d-block w-100"
                      alt="..."
                    />
                  </a>
                </div>
                <div class="carousel-item">
                  <a href="/product">
                    <img
                      src="https://file.hstatic.net/200000722513/file/gearvn-dai-tiec-rog-san-qua-toi-tuf-slider_47335ea3529147b2a278a1975f2989b0.jpg"
                      class="d-block w-100"
                      alt="..."
                    />
                  </a>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>

            <div className="Home_sidebar_2slidesmall col-4">
              <div className="">
                <a href="/product">
                  {" "}
                  <img src="https://file.hstatic.net/200000722513/file/right_1_-_linh_kien_may_tinh_82f376ea72ab484cbdfdfb841a843939.png" />
                </a>
              </div>
              <div>
                <a href="/product">
                  {" "}
                  <img src="https://file.hstatic.net/200000722513/file/right_2_-_asus_rog_ally_8a754b24bf2c448693b1a3d94d81ddd6.png" />
                </a>
              </div>
            </div>
          </div>
          <div className="Home_sidebar-three_img row">
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/bottom_1_-_laptop_van_phong_460758e56b684c108572a76fe1ae2610.png" />
              </a>
            </div>
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/bottom_2_-_laptop_gaming_e0e3d09a913f4c2ea9014f1c6d6d8ecf.png" />
              </a>
            </div>
            <div className="col-4">
              <a className="Home_sidebar-three_img-item" href="/product">
                <img src="https://file.hstatic.net/200000722513/file/right_3_-_pc_gaming_4a55a103e23c4647bdf826831750e2d2.png" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Home img slide */}
      <div className="row mb-2">
        <div className="Home_img-slide col-3">
          <a href="/product">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/ban-phim-co-homepage_708921960ed34559ad91e43d4fcd6051.png" />
          </a>
        </div>
        <div className="Home_img-slide col-3">
          <a href="/product">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_2_-_man_hinh_may_tinh_ce1ffd3f60d84b748e909ff52901eb90.png" />
          </a>
        </div>
        <div className="Home_img-slide col-3">
          <a href="/product">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_3_-_chuot_gaming_8f5a97d8af894c919165ed7ef0e2cd77.png" />
          </a>
        </div>
        <div className="Home_img-slide col-3">
          <a href="/product">
            {" "}
            <img src="https://file.hstatic.net/200000722513/file/sub_banner_4_-_pc_van_phong_2865fd86b8b24dfc90be4bfa33733f91.png" />
          </a>
        </div>
      </div>
      {/* Banner 2 ảnh */}
      <div className="home-slide-2 row mb-3 mt-3">
        <div className="col 6">
          <a href="/product">
            <img src="https://file.hstatic.net/200000722513/file/promotion_left_-_pc_station_0923c7e4de174e2abb4ef1cd7970032e.png" />
          </a>
        </div>
        <div className="col 6">
          <a href="/product">
            <img src="https://file.hstatic.net/200000722513/file/promotion_right_-_ban_ghe_766cabd265b94007812be23449cc0a2c.png" />
          </a>
        </div>
      </div>
      {/* Home product */}
      {/* PC */}
      <div className="Home_list-product-pc row mb-4">
        <div className="Home_list-product-pc-title mb-2">
          <div className="Home_list-product-pc_left">
            <h4>PC bán chạy</h4>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ee1111", fontSize: "18px" }}
            />
            <h5>Miễn phí giao hàng</h5>
          </div>
          <div className="Home_list-product-pc_right">
            <a href="" className="Home_list-product-pc_right-topic">
              PC Gaming
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Đồ họa
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Doanh nghiệp
            </a>
            <a href="" className="Home_list-product-pc_right-all">
              Xem tất cả
            </a>
          </div>
        </div>
        {/* Home card slide */}
        <div className="Home_list-product-pc-slide row">
          <Carousel responsive={responsive}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Carousel>
        </div>
      </div>
      {/* Laptop */}
      <div className="Home_list-product-pc row mb-4">
        <div className="Home_list-product-pc-title mb-2">
          <div className="Home_list-product-pc_left">
            <h4>Laptop gaming bán chạy</h4>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ee1111", fontSize: "18px" }}
            />
            <h5>Miễn phí giao hàng</h5>
          </div>
          <div className="Home_list-product-pc_right">
            <a href="" className="Home_list-product-pc_right-topic">
              PC Gaming
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Đồ họa
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Doanh nghiệp
            </a>
            <a href="" className="Home_list-product-pc_right-all">
              Xem tất cả
            </a>
          </div>
        </div>
        {/* Home card slide */}
        <div className="Home_list-product-pc-slide row">
          <Carousel responsive={responsive}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Carousel>
        </div>
      </div>
      {/* Banner */}
      <div className="home-banner row mb-4 mt-2">
        <div className="home-banner-8 col-8">
          <a href="">
            <img src="https://file.hstatic.net/200000722513/file/banner_man_hinh_1580x510__1__2df9691545ea4ae7a64c5692cfcc5ec3.png" />
          </a>
        </div>
        <div className="home-banner-4 col-4">
          <div className="mb-4">
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/laptop-rtx-40-series-combo-3-banner_d5b482d4f755472c8ea8967d6f640a40.png" />
            </a>
          </div>
          <div>
            <a href="">
              <img src="https://file.hstatic.net/200000722513/file/bot_promotion_banner_small_2_2ad55c2345c64fbfb87dab4957b33914.png" />
            </a>
          </div>
        </div>
      </div>
      {/* Chuột */}
      <div className="Home_list-product-pc row mb-4">
        <div className="Home_list-product-pc-title mb-2">
          <div className="Home_list-product-pc_left">
            <h4>Chuột bán chạy</h4>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ee1111", fontSize: "18px" }}
            />
            <h5>Miễn phí giao hàng</h5>
          </div>
          <div className="Home_list-product-pc_right">
            <a href="" className="Home_list-product-pc_right-topic">
              PC Gaming
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Đồ họa
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
              PC Doanh nghiệp
            </a>
            <a href="" className="Home_list-product-pc_right-all">
              Xem tất cả
            </a>
          </div>
        </div>
        {/* Home card slide */}
        <div className="Home_list-product-pc-slide row">
          <Carousel responsive={responsive}>
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
          </Carousel>
        </div>
      </div>
      {/* Home list product */}
      <div className="Home_list-product row mb-4">
        <h4> Danh sách sản phẩm</h4>
        <div className="seraphia"></div>
        <div className="row">
          {listProduct.map((item) => (
            <div className="col-1">
              <a href="/product">
                <img src={item.imageUrl} />
                <div>{item.name}</div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
