import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../utils/categoryData";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    sale_price: "",
    description: "",
    images: [],
    categoryId: "",
    color: "",
    weight: "",
    size: "",
    quantity: "",
  });
  const navigate = useNavigate();

  const handlePickImages = (e) => {
    const files = [...e.target.files];
    const newImages = [];
    files.forEach((file) => {
      if (!file) return;
      else newImages.push(file);
    });

    setProduct({
      ...product,
      images: [...product.images, ...newImages],
    });
  };

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

  return (
    <div className="product_add">
      <h5 className="mb-3">Thêm sản phẩm</h5>
      <div className="mb-4 d-flex flex-column justify-content-center align-items-center gap-2 product_add_pick-img">
        <i class="fa-solid fa-cloud-arrow-up" />
        <p>Kéo hoặc thả hình ảnh ở đây</p>
        <p>Hoặc</p>
        <label htmlFor="add_product" className="btn">
          Chọn hình ảnh
        </label>
        <input
          id="add_product"
          type="file"
          multiple
          accept="image/*"
          onChange={handlePickImages}
        />
      </div>
      <div className="mb-4 product_add_upload">
        <h6>Hình ảnh đã tải lên</h6>
        <div>
          {product.images.map((img, index) => (
            <div className="mb-2 d-flex align-items-center justify-content-between gap-3  product_add_card">
              <img src={URL.createObjectURL(img)} alt="product" />
              <div className="flex-fill">
                <p className="mb-1">{img.name}</p>
                <small className="mb-0">
                  {(img.size / 1024 / 1024).toFixed(2)} MB
                </small>
              </div>
              <i
                className="fa-solid fa-xmark "
                onClick={() => handleRemoveImage(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="mb-4 product_add_info">
          <div className="product_add_info_card">
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
          <div className="product_add_info_card">
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
          <div className="product_add_info_card">
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
          <div className="product_add_info_card">
            <h6>Giá giảm</h6>
            <input
              type="number"
              name="sale_price"
              className="form-control"
              required
              placeholder="VD: 18000..."
              value={product.sales_price}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Số lượng</h6>
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
          <div
            className="product_add_info_card"
            style={{
              flexBasis: "100%",
            }}
          >
            <h6>Danh mục</h6>
            <select
              class="form-select"
              name="categoryId"
              required
              value={product.categoryId}
              onChange={handleChange}
            >
              {Categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
            </select>
          </div>
          <div className="product_add_info_card">
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
            Thêm
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

export default AddProduct;
