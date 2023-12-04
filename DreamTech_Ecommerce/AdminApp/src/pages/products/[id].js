import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const fakeProduct = {
  id: "chuot-logitech-g102-lightsync-black",
  images: [
    "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
    "https://product.hstatic.net/200000722513/product/5.hinhanhsanpham1_d29de04024294f329e38332a99f2cb7c_f6f1e3c980974cd2b30dbc9e3438ae4c_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/6.hinhanhsanpham3_9f2fbf6b901f4a83b85737612e957030_92ddadad61b14aa3a725c3924a3f8089_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/14z90rs-02-1-gram-style-design-mobile_d3807c71442c4235b9da6ffdcf597d04_999d52f9503749069407961b41b8e2e7_1024x1024.jpg",
  ],
  name: "Laptop LG Gram Style 14Z90RS GAH54A5",
  brand:'LG',
  price: "38990000",
  sale_price: "35990000",
  description:
    "là một chiếc PC chất lượng cao với hiệu suất khủng từ CPU thế hệ thứ 11, ổ lưu trữ khủng cho khả năng xử lý ổn định. Nếu bạn đang tìm kiếm một chiếc laptop giá rẻ dưới 10 triệu nhưng vẫn đáp ứng đầy đủ mọi nhu cầu từ học tập đến làm việc thì Asus Expert Book B1400CEAE BV3186W chính là nhân vật bạn đang tìm kiếm.",
  categoryId: "laptop",
  quantity: 10,
  color:'Sliver',
  weight:'1.86 kg',
  size:'359 x 254 x 21.5 mm',
};

function EditProduct() {
  const [product, setProduct] = useState(fakeProduct);
  const navigate = useNavigate();

  const handleRemoveImage = (index) => {
    const newImages = [...product.images];
    newImages.splice(index, 1);
    setProduct({
      ...product,
      images: newImages,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    navigate("/products");
  };

  const isActive = (index) => {
    return index === 0 ? "active" : "";
  };

  return (
    <div className="product_edit">
      <h5 className="mb-3">Chỉnh sửa sản phẩm</h5>

      <div id={`image${product.id}`} className="mb-4 carousel slide">
        <div className="carousel-indicators">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Product"
              data-bs-target={`#image${product.id}`}
              data-bs-slide-to={index}
              className={`carousel-btn ${isActive(index)}`}
            />
          ))}
        </div>
        <div className="carousel-inner">
          {product.images.map((img, index) => (
            <div key={index} className={`carousel-item ${isActive(index)}`}>
              <img src={img} alt="Post" />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#image${product.id}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon">
            <i class="fa-solid fa-arrow-left-long" />
          </span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#image${product.id}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon">
            <i class="fa-solid fa-arrow-right-long" />
          </span>
        </button>
      </div>

      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-4 product_add_info">
        <div className="product_edit_info_card">
            <h6>Mã sản phẩm</h6>
            <input
              type="text"
              name="id"
              className="form-control"
              value={product.id}
              disabled
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Tên sản phẩm</h6>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="VD: Laptop..."
              required
              value={product.name}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Thương hiệu</h6>
            <input
              type="text"
              name="brand"
              className="form-control"
              required
              placeholder="VD: Dell..."
              value={product.brand}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Giá gốc</h6>
            <input
              type="number"
              name="price"
              className="form-control"
              required
              placeholder="VD: 19000..."
              value={product.price}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Giá giảm</h6>
            <input
              type="number"
              name="sale_price"
              className="form-control"
              required
              placeholder="VD: 18000..."
              value={product.sale_price}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Tồn kho</h6>
            <input
              type="number"
              required
              name="quantity"
              className="form-control"
              placeholder="VD: 15..."
              value={product.quantity}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Danh mục</h6>
            <select
              class="form-select"
              name="categoryId"
              required
              value={product.categoryId}
              onChange={handleChange}
            >
              <option selected disabled>
                Chọn
              </option>
              <option value="apple">Apple</option>
              <option value="ban-phim">Bàn phím</option>
              <option value="chuot-lot-chuot">Chuột - Lót chuột</option>
              <option value="laptop">Laptop</option>
              <option value="laptop-gaming">Laptop Gaming</option>
              <option value="mani-cpu-vga">Main - CPU - VGA</option>
              <option value="man-hinh">Màn hình</option>
              <option value="pc">PC</option>
              <option value="phan-mem-mang">Phần mềm mạng</option>
              <option value="phu-kien">Phụ kiện</option>
              <option value="tai-nghe-loa">Tai nghe - Loa</option>
            </select>
          </div>
          <div className="product_add_info_card">
            <h6>Màu sắc</h6>
            <input
              type="text"
              required
              name="color"
              className="form-control"
              placeholder="VD: Silver..."
              value={product.color}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Kích thước</h6>
            <input
              type="text"
              required
              name="size"
              className="form-control"
              placeholder="VD: 359 x 254 x 21.5 mm..."
              value={product.size}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Trọng lượng</h6>
            <input
              type="text"
              required
              name="weight"
              className="form-control"
              placeholder="VD: 359 x 254 x 21.5 mm..."
              value={product.weight}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Mô tả</h6>
            <textarea
              className="form-control"
              name="description"
              placeholder="VD: Mô tả..."
              style={{
                minHeight: "120px",
              }}
              value={product.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn_normal btn_accept " type="submit">
            Lưu
          </button>
          <button
            className="btn btn_normal"
            onClick={() => navigate("/products")}
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProduct;
