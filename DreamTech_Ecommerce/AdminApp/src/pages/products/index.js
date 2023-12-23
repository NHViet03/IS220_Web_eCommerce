import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import ExportCSV from "../../components/ExportCSV";
import formatMoney from "../../utils/formatMoney";
import Categories from "../../utils/categoryData";
import Filter from "../../components/Product/Filter";
import ProductList from "../../components/Product/ProductList";

const fakeProducts = [
  {
    id: "laptop-gaming-msi-gf63-12ucx-841vn",
    images: [
      "https://product.hstatic.net/200000722513/product/lg-gram-style-fix_4013ad0ecc9c449f9611fb4f31069a92_1024x1024.png",
      "https://product.hstatic.net/200000722513/product/5.hinhanhsanpham1_d29de04024294f329e38332a99f2cb7c_f6f1e3c980974cd2b30dbc9e3438ae4c_1024x1024.jpg",
      "https://product.hstatic.net/200000722513/product/6.hinhanhsanpham3_9f2fbf6b901f4a83b85737612e957030_92ddadad61b14aa3a725c3924a3f8089_1024x1024.jpg",
      "https://product.hstatic.net/200000722513/product/14z90rs-02-1-gram-style-design-mobile_d3807c71442c4235b9da6ffdcf597d04_999d52f9503749069407961b41b8e2e7_1024x1024.jpg",
    ],
    name: "Laptop LG Gram Style 14Z90RS GAH54A5",
    price: 38990000,
    sale_price: 35990000,
    category: "Laptop",
    QtyInStock: 10,
  },
  {
    id: "chuot-logitech-g102-lightsync-black",
    images: [
      "https://product.hstatic.net/200000722513/product/thumbchuot_a405fadb92a34c429c3eed4d11a84fb5_medium.jpg",
    ],
    name: "Chuột Logitech G102 LightSync Black",
    price: 599000,
    sale_price: 399000,
    category: "Chuột - Lót chuột",
    QtyInStock: 10,
  },
  {
    id: "pc-gvn-intel-i3-12100f-vga-gtx-1650",
    images: [
      "https://product.hstatic.net/200000722513/product/5000d_white_aero_61797e20d29a47ff9f7589071a5099da_medium.png",
    ],
    name: "PC GVN Intel i3-12100F/ VGA GTX 1650",
    price: 11590000,
    sale_price: 10890000,
    category: "PC",
    QtyInStock: 10,
  },
];

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalDelete, setModalDelete] = useState(false);
  const [filter, setFilter] = useState({
    sort: "default",
    category: ["all"],
    price: [0, 0],
  });

  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(...fakeProducts);
    }
    setProducts(newArr);
  }, []);

  const customData = useCallback(() => {
    return products.map((product) => ({
      "Mã sản phẩm": product.id,
      "Tên sản phẩm": product.name,
      "Hình ảnh": product.images.join("\n"),
      "Giá gốc (VNĐ)": formatMoney(product.price),
      "Giá giảm giá (VNĐ)": formatMoney(product.sale_price),
      "Tồn kho": product.QtyInStock,
      "Danh mục": product.category,
    }));
  }, [products]);

  useEffect(() => {
    if (products.length === 0) return;
    let newProducts = [...products];
    switch (filter.sort) {
      case "price_high_to_low":
        newProducts.sort((a, b) => b.price - a.price);
        break;
      case "price_low_to_high":
        newProducts.sort((a, b) => a.price - b.price);
        break;
      case "name_z_to_a":
        newProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "name_a_to_z":
        newProducts.sort((a, b) => -b.name.localeCompare(a.name));
        break;
      default:
        let newArr = [];
        for (let i = 0; i < 3; i++) {
          newArr.push(...fakeProducts);
          newProducts = newArr;
        }
    }
    setProducts(newProducts);
  }, [filter.sort]);

  return (
    <div className="mb-3 table">
      <div className="box_shadow mb-3 table_container">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
          <h5>Danh sách Sản phẩm</h5>
          <div className="d-flex align-items-center gap-4">
            <div className="d-flex justify-content-between align-items-center table_search">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="form-control me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i class="fa-solid fa-magnifying-glass" />
            </div>
            <Link
              to={{
                pathname: "/products/add",
              }}
              className="btn btn_table btn_add"
            >
              <i class="fa-solid fa-plus" />
              Thêm sản phẩm
            </Link>
            <ExportCSV csvData={customData()} filename={"danh-sach-san-pham"} />
          </div>
        </div>
        <div className="d-flex justify-content-between mb-3 ">
          <Filter filter={filter} setFilter={setFilter} />
        </div>
        <div className="mb-3">
          <ProductList products={products} setModalDelete={setModalDelete} />
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
