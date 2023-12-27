import React, { useMemo } from "react";
import Categories from "../../utils/categoryData";
import formatMoney from "../../utils/formatMoney";

function Filter({ filter, setFilter }) {
  const priceFilterData = useMemo(
    () => [
      {
        title: "Dưới 1 triệu",
        value: [0, 1000000],
      },
      {
        title: "Từ 1 - 10 triệu",
        value: [1000000, 10000000],
      },
      {
        title: "Từ 10 - 20 triệu",
        value: [10000000, 20000000],
      },
      {
        title: "Trên 20 triệu",
        value: [20000000, 50000000],
      },
    ],
    []
  );

  const handleChangeCategory = (id) => {
    setFilter({
      ...filter,
      category: id,
    });
  };
  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <h6 className="mb-0">Bộ lọc</h6>
        <div class="dropdown">
          <button
            className="form-control dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            Danh mục
          </button>

          <div className="box_shadow dropdown-menu">
            <div className="filter_menu">
              {Categories.map((category) => (
                <div
                  key={category.id}
                  className={`form-check mb-2 ${
                    filter.category===category.id && "active"
                  }`}
                  onClick={() => handleChangeCategory(category.id)}
                >
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={category.id}
                    id={category.id}
                    checked={filter.category===category.id}
                  />
                  <label className="form-check-label" htmlFor={category.id}>
                    {category.title}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div class="dropdown">
          <button
            className="form-control dropdown-toggle"
            data-bs-toggle="dropdown"
          >
            {filter.price[0] === 0 && filter.price[1] === 0 ? (
              "Mức giá"
            ) : (
              <span>
                Từ {formatMoney(filter.price[0]) + "đ"} -{" "}
                {formatMoney(filter.price[1]) + "đ"}
              </span>
            )}
          </button>

          <div className="box_shadow dropdown-menu">
            <div
              className="p-3"
              style={{
                width: "530px",
              }}
            >
              <div className="mb-2 d-flex justify-content-between align-items-center">
                {priceFilterData.map((item, index) => (
                  <button
                    key={index}
                    className="btn btn_normal"
                    onClick={() =>
                      setFilter({
                        ...filter,
                        price: item.value,
                      })
                    }
                    style={{
                      padding: "8px",
                      borderColor:
                        item.value[0] === filter.price[0] &&
                        item.value[1] === filter.price[1]
                          ? "var(--primary-color)"
                          : "",
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <p className="mb-2">Hoặc chọn mức giá phù hợp</p>
              <div className="filter_range">
                <div>
                  <input
                    type="text"
                    placeholder="VD: 100000"
                    className="form-control"
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        price: [e.target.value, filter.price[1]],
                      })
                    }
                  />
                  <span>vnđ</span>
                </div>
                <hr />
                <div>
                  <input
                    type="text"
                    placeholder="VD: 50000000"
                    className="form-control"
                    onChange={(e) =>
                      setFilter({
                        ...filter,
                        price: [filter.price[0], e.target.value],
                      })
                    }
                  />
                  <span>vnđ</span>
                </div>
              </div>
              <div className=" mt-3 text-center">
                <button
                  className="btn btn_normal btn_accept"
                  onClick={() =>
                    setFilter({
                      ...filter,
                      price: [0, 0],
                    })
                  }
                >
                  Bỏ chọn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex align-items-center gap-4">
        <h6
          className="mb-0"
          style={{
            minWidth: "100px",
          }}
        >
          Sắp xếp theo
        </h6>
        <select
          className="form-select"
          required
          value={filter.sort}
          onChange={(e) =>
            setFilter({
              ...filter,
              sort: e.target.value,
            })
          }
        >
          <option value="default">Mặc định</option>
          <option value="price_high_to_low">Giá từ cao đến thấp</option>
          <option value="price_low_to_high">Giá từ thấp đến cao</option>
          <option value="name_a_to_z">Tên: A-Z</option>
          <option value="name_z_to_a">Tên: Z-A</option>
        </select>
      </div>
    </>
  );
}

export default Filter;
