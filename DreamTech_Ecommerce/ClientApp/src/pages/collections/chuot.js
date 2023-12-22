import React, {useState, useEffect} from "react";
import CardItem from "../../components/Home/CardItem";
import ModalHang from "../../components/product/laptop/ModalHang";
import ModalGia from "../../components/product/laptop/ModalGia";
import ModalLoc from "../../components/product/laptop/ModalLoc";
import {useDispatch, useSelector} from "react-redux";
import { getAllChuot } from "../../redux/actions/chuotAction";
const ChuotPage = () => {
  const {chuot} = useSelector(state => state);
  const [sortBy, setSortBy] = useState("featured"); //State cho thanh sắp xếp
  const [showMenuItem, setShowMenuItem] = useState(false); // 
  const [showHang, setShowHang] = useState(false); 
  const [showGia, setShowGia] = useState(false); 
  const [showLoc, setShowLoc] = useState(false); 
  const [chuotdata, setChuotdata] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllChuot());
  },[dispatch])
  useEffect(()=>{
   setChuotdata(chuot)
  },[chuot])
  
    const  details = ["Pin sạc", "Không dây", "Led RGB", "DB -10.000"]
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
        <div className="product_link_laptop align-items-center">Chuột</div>
      </div>
      <div className="row my-4">
        <img
          className="w-100 p-0"
          src="//file.hstatic.net/200000722513/file/gearvn-combo-gaming-gear-chunli-sf6-new_081ad2a50a2d40d8b0107bef7d5b6ec4.jpg"
        
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
         {chuotdata.map(item=>{
          return(
            <CardItem
            item={item} details={details}
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

export default ChuotPage;
