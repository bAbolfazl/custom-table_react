import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../../proividers/filtersProvider";
import data from "../../statics/data.json";
import TableRowsList from "../tableRowsList/tableRowsList.component";

const TableContent = ({ setnumberOfPages, numberOfROws, page, setPage }) => {
  const [tableData, setTableData] = useState([]);

  const { filterName, fieldName, filterDate } = useContext(FiltersContext);

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        item.name.toLowerCase().includes(filterName.toLocaleLowerCase()) &&
        item.field.toLowerCase().includes(fieldName.toLocaleLowerCase()) &&
        item.date.includes(filterDate)
    );
    // debugger;

    setnumberOfPages(Math.ceil(filteredData.length / numberOfROws));

    const currentData = filteredData.slice((page - 1) * 10, page * 10);
    // const finalArr = currentData.map((item) => ({ ...item, star: false }));
    setTableData(currentData);
  }, [page, filterName, fieldName, filterDate]);

  useEffect(() => {
    setPage(1);
  }, [filterName, fieldName, setPage]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>نام تغییر دهنده</td>
            <td>تاریخ</td>
            <td>نام آگهی</td>
            <td>فیلد</td>
            <td>مقدار قدیمی</td>
            <td>مقدار جدید</td>
          </tr>
        </thead>
        <tbody>
          <TableRowsList tableData={tableData} />
        </tbody>
      </table>
    </>
  );
};

export default TableContent;
