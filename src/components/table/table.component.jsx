import { useState } from "react";
import Pagination from "../pagination/pagination.component";
import TableContent from "../tableContent/TableContent.component";

const Table = ({ numberOfROws }) => {
  const [page, setPage] = useState(1);
  const [numberOfPages, setnumberOfPages] = useState(0);

  return (
    <div className="table">
      <TableContent
        setnumberOfPages={setnumberOfPages}
        numberOfROws={numberOfROws}
        page={page}
        setPage={setPage}
      />

      <Pagination setPage={setPage} page={page} nubmerOfPages={numberOfPages} />
    </div>
  );
};

export default Table;
