import React, {useState} from "react";
import CardItem from "../../components/Home/CardItem";
import ModalHang from "../../components/product/laptop/ModalHang";
import ModalGia from "../../components/product/laptop/ModalGia";
import ModalLoc from "../../components/product/laptop/ModalLoc";
import { PC } from "../../utils/ProductData";
const PCPage = () => {
  const [sortBy, setSortBy] = useState("featured"); //State cho thanh sắp xếp
  const [showMenuItem, setShowMenuItem] = useState(false); // 
  const [showHang, setShowHang] = useState(false); 
  const [showGia, setShowGia] = useState(false); 
  const [showLoc, setShowLoc] = useState(false); 


  const handleSortChange = (value) => {
    setSortBy(value);
  };
  return (
    <div className="container mb-4">
      <div className="product_link mt-4 flex gap-3 align-items-center">
        <div className="product_link_home align-items-center">
        <i className="fa-solid fa-house mr-2 align-items-center"></i>
          <a href="#">Trang chủ</a>
        </div>
        <div className="product_link_laptop align-items-center">/</div>
        <div className="product_link_laptop align-items-center">PC</div>
      </div>
      <div className="row my-4">
        <img
          className="w-100 p-0"
          src="//file.hstatic.net/200000722513/file/laptop_web_header_84c696d472ae4938900a83837c34c1a3_2048x2048.png"
         />
      </div>
      <div className="row main-content ">
        {/* Bộ lọc */}
        <div className="product_filter flex gap-3 mt-3 ml-3">
            {/* Bộ lọc chính */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_boloc">
              <i class="fa-solid fa-filter" onClick={()=> setShowLoc(!showLoc)}></i>
              <div onClick={()=> setShowLoc(!showLoc)}>Bộ lọc</div>
              {
              showLoc && <ModalLoc showLoc={showLoc} setShowLoc={setShowLoc}/>
              }
            </div>
            {/* Hãng */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_hang"
           
            >
              <div  onClick={() => setShowHang(!showHang)}>Hãng</div>
              <i class="fa-solid fa-caret-down"  onClick={() => setShowHang(!showHang)}></i>
            {
              showHang && <ModalHang/>
            }
            </div>
           
            {/* Thanh kéo tiền */}
            <div className="flex justify-content-center align-items-center gap-2 product_filter_gia">
              <div onClick={()=> setShowGia(!showGia)}>Giá</div>
              <i class="fa-solid fa-caret-down" onClick={()=> setShowGia(!showGia)}></i>
              {
              showGia && <ModalGia/>
            }
            </div>
        </div>
        {/* Sắp xếp theo */}
        <div className="product_arrange ">
        <div className="product_arrange_dropdown my-2" onClick={() => setShowMenuItem(!showMenuItem)}>
            <i className="fa-solid fa-arrow-down-wide-short mr-2"></i>
            <h5 className="mr-2">Xếp theo:</h5>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="sortDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
               
              >
                {sortBy === "featured" ? "Nổi bật" : sortBy === "ascending" ? "Giá tăng dần" : "Giá giảm dần"}
              </button>
             {
              showMenuItem &&  <div className="dropdown-menu" aria-labelledby="sortDropdown">
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("featured")}
                >
                  Nổi bật
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("ascending")}
                >
                  Giá tăng dần
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => handleSortChange("descending")}
                >
                  Giá giảm dần
                </button>
              </div>
             }
            </div>
          </div>
        </div>
        {/* Sản phẩm */}
        <div className="list-product my-2">
         {PC.map(item=>{
          return(
            <CardItem
            item={item}
          />
          )
         })}
        </div>
         
      </div>
       {/* Xem thêm */}
      {/* <div className="flex justify-content-center my-4">
            <button className="btn btn-outline-secondary w-25 xemthem_btn">Xem thêm</button>
         </div> */}
    </div>
  );
};

export default PCPage;
