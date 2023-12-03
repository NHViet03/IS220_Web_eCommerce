import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import ModalDeleteProduct from "../../components/ModalDeleteProduct";

const fakeProduct = {
  id: 4,
  images: [
    "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
    "https://product.hstatic.net/200000722513/product/5.hinhanhsanpham1_d29de04024294f329e38332a99f2cb7c_f6f1e3c980974cd2b30dbc9e3438ae4c_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/6.hinhanhsanpham3_9f2fbf6b901f4a83b85737612e957030_92ddadad61b14aa3a725c3924a3f8089_1024x1024.jpg",
    "https://product.hstatic.net/200000722513/product/14z90rs-02-1-gram-style-design-mobile_d3807c71442c4235b9da6ffdcf597d04_999d52f9503749069407961b41b8e2e7_1024x1024.jpg",
  ],
  name: "Laptop LG Gram Style 14Z90RS GAH54A5",
  price: "38.990.000",
  sale_price: "35.990.000",
  gifts: [
    {
      id: 123,
      name: "Móc khóa Keycap DreamTech",
    },
    {
      id: 124,
      name: "Túi chống sốc DreamTech",
    },
  ],
  description: [
    {
      tech: "CPU",
      content:
        "Intel Core i5-1340P (12 Cores: 4P + 8E, P: 1.9 up to 4.6 GHz / E: 1.4 up to 3.4 GHz) 12 MB Cache",
    },
    {
      tech: "RAM",
      content: "16GB LPDDR5 6000MHz (Dual Channel, Onboard, không nâng cấp)",
    },
    {
      tech: "Ổ cứng",
      content: "512GB PCIe NVMe M.2 SSD (2 slot, còn trống 1 khe M.2)",
    },
    {
      tech: "Card đồ họa",
      content: "Intel Iris Xe Graphics",
    },
    {
      tech: "Màn hình",
      content:
        "14 inch WQXGA+ 2K8 (2880 x 1800), 16:10, OLED 90Hz 0.2ms, DCI-P3 100%, LGD, 500 nits, Anti-Glare Flow Refrection",
    },
    {
      tech: "Hệ điều hành",
      content: "Windows 11 Home",
    },
    {
      tech: "Pin",
      content: "72 Wh Li-Ion, Thời lượng pin lên đến 15 giờ (Video playback)",
    },
    {
      tech: "Trọng lượng",
      content: "999 gram",
    },
    {
      tech: "Màu sắc",
      content: "Trắng",
    },
    {
      tech: "Kích thước",
      content: "31.16 cm x 21.39 cm x 1.59  cm",
    },
  ],
  category: "Laptop",
  QtyInStock: 10,
};

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalDelete, setModalDelete] = useState(false);

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push(fakeProduct);
    }
    setProducts(newArr);
  }, []);

  return (
    <div className="mb-3 products">
      <div className="box_shadow mb-3 products_container">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
          <h5>Danh sách sản phẩm</h5>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex justify-content-between align-items-center products_search">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="form-control me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i class="fa-solid fa-magnifying-glass" />
            </div>
            <button className="btn btn_product btn_add">
              <i class="fa-solid fa-plus" />
              Thêm sản phẩm
            </button>
          </div>
        </div>
        <div className="mb-3">
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
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
                  <th scope="row">{index + 1}</th>
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
                    <span>{product.name}</span>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.sale_price}</td>
                  <td>{product.QtyInStock}</td>
                  <td>{product.category}</td>
                  <td colSpan="2">
                    <div className="d-flex align-items-center gap-3">
                      <Link to={`/products/${product.id}`}>
                      <button className="btn btn_product btn_edit">
                        <i className="fa-solid fa-pen-to-square" />
                        Sửa
                      </button>
                      </Link>
                      <button
                        className="btn btn_product btn_delete"
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
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center ">
        <p>
          Hiển thị {1} đến {10} trong tổng số {50} sản phẩm
        </p>
        <div className="pagination">
          <button
            className="btn btn_page"
            disabled={page <= 1 && true}
            onClick={() => setPage(page - 1)}
          >
            Trước
          </button>
          {pages.map((id) => (
            <button
              key={id}
              className={`btn btn_page ${id === page ? "active" : ""} `}
              onClick={() => setPage(id)}
            >
              {id}
            </button>
          ))}
          <button
            className="btn btn_page"
            disabled={page >= pages.length && true}
            onClick={() => setPage(page + 1)}
          >
            Sau
          </button>
        </div>
      </div>
      {modalDelete && <ModalDeleteProduct setModalDelete={setModalDelete} />}
    </div>
  );
}

export default Products;
