import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Categories from "../../utils/categoryData";

import { useSelector, useDispatch } from "react-redux";
import { getDataAPI } from "../../utils/fetchData";
import { updateProduct } from "../../redux/actions/productAction";

function EditProduct() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const res = await getDataAPI(`Product/GetProductById/${id}`, auth.token);
      setProduct({
        ...res.data,
        images: res.data.productImages.map((img) => img.imageUrl),
      });
    };

    getProduct();
  }, [auth.token, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProduct({ newProduct: product, auth }));
    navigate(-1);
  };

  const isActive = (index) => {
    return index === 0 ? "active" : "";
  };

  if (!product.id) return null;

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
              name="salePrice"
              className="form-control"
              required
              placeholder="VD: 18000..."
              value={product.salePrice}
              onChange={handleChange}
            />
          </div>
          <div className="product_edit_info_card">
            <h6>Tồn kho</h6>
            <input
              type="number"
              required
              name="qtyInStock"
              className="form-control"
              placeholder="VD: 15..."
              value={product.qtyInStock}
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
              {Categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.title}
                </option>
              ))}
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
