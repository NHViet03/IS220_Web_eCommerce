import React, { useMemo } from "react";
import { DateRangePicker } from "rsuite";

function Filter({ filter, setFilter, filterSmall }) {
  const handlePickDate = (value) => {
    if (value === null) {
      setFilter({
        ...filter,
        date: [new Date(new Date().getFullYear() - 2, 0, 1), new Date()],
      });
    } else
      setFilter({
        ...filter,
        date: value,
      });
  };

  return (
    <>
      <div className="d-flex align-items-center gap-4">
        <h6 className="mb-0">Bộ lọc</h6>
        <div className="d-flex align-items-center gap-1">
          <p className="mb-0 fs-6" style={{ minWidth: "80px" }}>
            Trạng thái
          </p>
          <select
            className="form-select"
            required
            value={filter.status}
            onChange={(e) =>
              setFilter({
                ...filter,
                status: e.target.value,
              })
            }
          >
            <option value="all">Tất cả</option>
            <option value={2}>Đã giao hàng</option>
            <option value={0}>Đang giao hàng</option>
            <option value={1}>Đã hủy đơn</option>
          </select>
        </div>
        {!filterSmall && (
          <div className="d-flex align-items-center gap-1">
            <p className="mb-0 fs-6" style={{ minWidth: "80px" }}>
              Ngày đặt
            </p>
            <DateRangePicker
              defaultValue={filter.date}
              onChange={handlePickDate}
            />
          </div>
        )}
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
          <option value="total_high_to_low">Tổng tiền từ cao đến thấp</option>
          <option value="total_low_to_high">Tổng tiền từ thấp đến cao</option>
          <option value="date_newest_to_oldest">
            Ngày đặt từ mới nhất đến cũ nhất
          </option>
          <option value="date_oldest_to_newest">
            Ngày đặt từ cũ nhất đến mới nhất
          </option>
        </select>
      </div>
    </>
  );
}

export default Filter;
