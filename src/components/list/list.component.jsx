import FiltersProvider from "../../proividers/filtersProvider";
import Filters from "../filters/filters.component";
import Table from "../table/table.component";

const List = () => {

  return (
    <div className="list">
      <FiltersProvider>
        <Filters />
        <Table numberOfROws={10} />
      </FiltersProvider>
    </div>
  );
};

export default List;
