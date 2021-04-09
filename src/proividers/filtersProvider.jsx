import { createContext, useState } from "react";

export const FiltersContext = createContext({
  filterName: "",
  setFilterName: () => {},

  fieldName: "",
  setFieldName: () => {},

  filterDate: "",
  setFilterDate: () => {},
});

const FiltersProvider = ({ children }) => {
  const [filterName, setFilterName] = useState("");
  const [fieldName, setFieldName] = useState("");
  const [filterDate, setFilterDate] = useState("");
  // debugger

  return (
    <FiltersContext.Provider
      value={{
        filterName,
        setFilterName,
        fieldName,
        setFieldName,
        filterDate,
        setFilterDate,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export default FiltersProvider;
