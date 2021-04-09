import { useContext, useEffect } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import { FiltersContext } from "../../proividers/filtersProvider";

const Filters = () => {
  const {
    filterName,
    setFilterName,
    fieldName,
    setFieldName,
    filterDate,
    setFilterDate,
  } = useContext(FiltersContext);

  // const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  useEffect(() => {
    const nameQeury = query.get("name");
    const fieldQeury = query.get("field");
    const dateQuery = query.get("date");
    // debugger;

    nameQeury && setFilterName(nameQeury);
    fieldQeury && setFieldName(fieldQeury);
    dateQuery && setFilterDate(dateQuery);
    // alert('hi')
    console.log("location.search", location.search);
  }, [query]);

  const onNameChange = (e) => {
    const value = e.currentTarget.value;
    setFilterName(value);
    // pushParamsToURL();
    history.push({
      pathname: "/table",
      search: `?${query.get("date") ? `date=${query.get("date")}&` : ""}${
        query.get("filter") ? `filter=${query.get("filter")}&` : ""
      }name=${value}`,
    });
  };
  const onFieldChange = (e) => {
    const value = e.currentTarget.value;
    setFieldName(value);
    // pushParamsToURL();
    history.push({
      pathname: "/table",
      search: `?${query.get("date") ? `date=${query.get("date")}&` : ""}${
        query.get("name") ? `name=${query.get("name")}&` : ""
      }field=${value}`,
    });
  };
  const onDateChange = (e) => {
    const value = e.currentTarget.value;
    setFilterDate(value, console.log("FiltersContext", value));
    history.push({
      pathname: "/table",
      search: `?${query.get("field") ? `field=${query.get("field")}&` : ""}${
        query.get("name") ? `name=${query.get("name")}&` : ""
      }date=${value}`,
    });
  };

  return (
    <div className="filters">
      <div>
        <label>
          <div>نام تغییر دهنده</div>
          <input onChange={onNameChange} type="text" value={filterName} />
        </label>
      </div>
      <div>
        <label>
          <div>تاریخ</div>
          <input onChange={onDateChange} type="date" value={filterDate} />
        </label>
      </div>
      <div>
        <label>
          <div>فیلد</div>
          <input onChange={onFieldChange} type="text" value={fieldName} />
        </label>
      </div>
    </div>
  );
};

export default Filters;
