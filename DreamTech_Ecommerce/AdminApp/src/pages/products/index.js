import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import ModalDeleteProduct from "../../components/ModalDeleteProduct";
import ExportCSV from "../../components/ExportCSV";
import formatMoney from "../../utils/formatMoney";
import Filter from "../../components/Product/Filter";
import ProductList from "../../components/Product/ProductList";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [modalDelete, setModalDelete] = useState(false);
  const [filter, setFilter] = useState({
    sort: "default",
    category: "",
    price: [0, 0],
  });

  const auth = useSelector((state) => state.auth);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const pages = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    dispatch(
      getProducts({
        category: filter.category,
        price: filter.price,
        page,
        auth,
      })
    );
  }, [auth, dispatch, page, filter.category, filter.price]);

  useEffect(() => {
    setProducts(product.products);
  }, [product.products]);

  useEffect(() => {
    window.location.hash = `category=${filter.category}&price_from=${filter.price[0]}&price_to=${filter.price[1]}&page=${page}`;
  }, [page, filter.category, filter.price]);

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
        newProducts = product.products;
    }
    setProducts(newProducts);
  }, [filter.sort]);

  const handleSearch = () => {
    window.location.hash = `search=${search}&page=1`;
    dispatch(getProducts({ search, auth }));
  };

  return (
    <div className="mb-3 table">
      <div className="box_shadow mb-3 table_container">
        <div className="d-flex justify-content-between align-items-center mb-3 ">
          <h5>Danh sách Sản phẩm</h5>
          <div className="d-flex align-items-center gap-4">
            <form
              className="d-flex justify-content-between align-items-center table_search"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                className="form-control me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <i class="fa-solid fa-magnifying-glass" />
            </form>
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
          Hiển thị {(page - 1) * 10 + 1} đến {page * 10} trong tổng số{" "}
          {pages.length * 10} sản phẩm
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
      {modalDelete && (
        <ModalDeleteProduct
          setModalDelete={setModalDelete}
          id={modalDelete.id}
        />
      )}
    </div>
  );
}

export default Products;
