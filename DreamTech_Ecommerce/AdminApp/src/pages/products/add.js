import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "../../utils/categoryData";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/actions/productAction";

function AddProduct() {
  const [product, setProduct] = useState({
    Name: "",
    Brand: "",
    Price: "",
    SalePrice: "",
    Description: "",
    Images: [],
    CategoryId: "",
    Color: "",
    Weight: "",
    Size: "",
    QtyInStock: 0,
  });
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlePickImages = (e) => {
    const files = [...e.target.files];
    const newImages = [];
    files.forEach((file) => {
      if (!file) return;
      else newImages.push(file);
    });

    setProduct({
      ...product,
      Images: [...product.Images, ...newImages],
    });
  };

  const handleRemoveImage = (index) => {
    const newImages = [...product.Images];
    newImages.splice(index, 1);
    setProduct({
      ...product,
      Images: newImages,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Id = product.Name.toLowerCase().replace(/\s/g, "-") + "-" + nanoid(3);

    const productData = new FormData();
    productData.append("Id", Id);

    for (const key in product) {
      if (key === "Images") {
        for (const img of product[key]) {
          productData.append("Images", img);
        }
      } else productData.append(key, product[key]);
    }

    await dispatch(createProduct({ product: productData, auth }));
    navigate(-1);
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
          {product.Images.map((img, index) => (
            <div className="mb-2 d-flex align-items-center justify-content-between gap-3  product_add_card">
              <img src={URL.createObjectURL(img)} alt="product" />
              <div className="flex-fill">
                <p className="mb-1">{img.name.slice(0, 50)}</p>
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
              name="Name"
              className="form-control"
              placeholder="VD: Laptop..."
              required
              value={product.Name}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Thương hiệu</h6>
            <input
              type="text"
              name="Brand"
              className="form-control"
              required
              placeholder="VD: Dell..."
              value={product.Brand}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Giá gốc</h6>
            <input
              type="number"
              name="Price"
              className="form-control"
              required
              placeholder="VD: 19000..."
              value={product.Price}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Giá giảm</h6>
            <input
              type="number"
              name="SalePrice"
              className="form-control"
              required
              placeholder="VD: 18000..."
              value={product.SalePrice}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Số lượng</h6>
            <input
              type="number"
              name="QtyInStock"
              className="form-control"
              placeholder="VD: 15..."
              value={product.QtyInStock}
              onChange={handleChange}
            />
          </div>

          <div className="product_add_info_card">
            <h6>Màu sắc</h6>
            <input
              type="text"
              name="Color"
              className="form-control"
              placeholder="VD: Silver..."
              value={product.Color}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Kích thước</h6>
            <input
              type="text"
              name="Size"
              className="form-control"
              placeholder="VD: 359 x 254 x 21.5 mm..."
              value={product.Size}
              onChange={handleChange}
            />
          </div>
          <div className="product_add_info_card">
            <h6>Trọng lượng</h6>
            <input
              type="text"
              name="Weight"
              className="form-control"
              placeholder="VD: 359 x 254 x 21.5 mm..."
              value={product.Weight}
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
              name="CategoryId"
              required
              value={product.CategoryId}
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
              name="Description"
              placeholder="VD: Mô tả..."
              style={{
                minHeight: "120px",
              }}
              value={product.Description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center gap-3">
          <button className="btn btn_normal btn_accept " type="submit">
            Thêm
          </button>
          <button className="btn btn_normal" onClick={handleSubmit}>
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
