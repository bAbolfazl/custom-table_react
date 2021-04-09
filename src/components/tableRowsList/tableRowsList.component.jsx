import { useEffect, useState } from "react";

const TableRowsList = ({ tableData }) => {
  const localStars = JSON.parse(localStorage.getItem("stars")) || [];
  const [stars, setStars] = useState(localStars);
  console.log("localStars", localStars);

  useEffect(() => {
    console.log("stateStars", stars);
    localStorage.setItem("stars", JSON.stringify(stars));
  }, [stars]);

  const onRowClick = (id) => () => {
    console.log(stars);
    // debugger;
    if (stars.includes(id)) {
      //   alert("tekrari");
      const newStars = stars.filter((item) => item !== id);
      setStars([...newStars]);

      return;
    }
    // console.log(id);
    setStars((prev) => [...prev, id]);
  };

  return (
    <>
      {tableData?.map(
        ({ id, name, date, title, field, old_value, new_value }) => (
          <tr
            key={id}
            onClick={onRowClick(id)}
            className={`${stars.includes(id) ? "bg--yellow" : ""}`}
          >
            <td>{name}</td>
            <td>{date}</td>
            <td>{title}</td>
            <td>{field}</td>
            <td>{old_value}</td>
            <td>{new_value}</td>
          </tr>
        )
      )}
    </>
  );
};

export default TableRowsList;
