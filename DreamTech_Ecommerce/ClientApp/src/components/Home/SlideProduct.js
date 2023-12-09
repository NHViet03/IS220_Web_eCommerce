import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from "react-multi-carousel";
import React from 'react'
import CardItem from './CardItem'

const SlideProduct = ({name, namedetail1, namedetail2, namedetail3}) => {
    const responsive = {
        superLargeDesktop: {
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
    <div>
        <div className="Home_list-product-pc row mb-4">
        <div className="Home_list-product-pc-title mb-2">
          <div className="Home_list-product-pc_left">
            <h4>{name}</h4>
            <FontAwesomeIcon
              icon={faTruck}
              style={{ color: "#ee1111", fontSize: "18px" }}
            />
            <h5>Miễn phí giao hàng</h5>
          </div>
          <div className="Home_list-product-pc_right">
            <a href="" className="Home_list-product-pc_right-topic">
             {namedetail1}
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
            {namedetail2}
            </a>
            <a href="" className="Home_list-product-pc_right-topic">
            {namedetail3}
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
    </div>
  )
}

export default SlideProduct