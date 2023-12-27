import React from "react";
import { Link } from "react-router-dom";
import formatMoney from "../../utils/formatMoney";

const ProductList = ({ products, setModalDelete }) => {
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Mã sản phẩm</th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Tên sản phẩm <i className="fa-solid fa-sort ms-1" />
          </th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Giá gốc (VNĐ) <i className="fa-solid fa-sort ms-1" />
          </th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Giá giảm giá (VNĐ) <i className="fa-solid fa-sort ms-1" />
          </th>
          <th
            scope="col"
            style={{
              cursor: "pointer",
            }}
          >
            Tồn kho <i className="fa-solid fa-sort ms-1" />
          </th>
          <th scope="col">Danh mục</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {product.id.length > 10
                ? product.id.slice(0, 10) + "..."
                : product.id}
            </td>
            <td>
              <img
                src={product.images[0]}
                alt="product"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  marginRight: "8px",
                }}
              />
              <span>
                {product.name.length > 30
                  ? product.name.slice(0, 30) + "..."
                  : product.name}
              </span>
            </td>
            <td>{formatMoney(product.price)}</td>
            <td>{formatMoney(product.sale_price)}</td>
            <td>{product.QtyInStock}</td>
            <td>{product.category.name}</td>
            <td colSpan="2">
              <div className="d-flex align-items-center gap-3">
                <Link to={`/products/${product.id}`}>
                  <button className="btn btn_table btn_edit">
                    <i className="fa-solid fa-pen-to-square" />
                    Sửa
                  </button>
                </Link>
                <button
                  className="btn btn_table btn_delete"
                  onClick={() => setModalDelete(product)}
                >
                  <i className="fa-solid fa-trash" />
                  Xóa
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
