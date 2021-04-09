const Pagination = ({ setPage, nubmerOfPages, page }) => {
  const onLastClick = () => {
    setPage(nubmerOfPages);
    // debugger;
  };

  const onFirstClick = () => {
    setPage(1);
  };
  const onNextClick = () => {
    if (page >= nubmerOfPages) return;
    setPage(page + 1);
  };
  const onPrevClick = () => {
    if (page <= 1) return;
    setPage(page - 1);
  };

  return (
    <div className="pagination">
      <ul>
        <li onClick={onFirstClick}>اولین ({nubmerOfPages === 0 ? 0 : 1})</li>
        <li onClick={onPrevClick}>قبلی</li>
        {/* {number} */}
        <li className="active">{nubmerOfPages === 0 ? 0 : page}</li>
        <li onClick={onNextClick}>بعدی</li>
        <li onClick={onLastClick}>آخرین ({nubmerOfPages})</li>
      </ul>
    </div>
  );
};

export default Pagination;
