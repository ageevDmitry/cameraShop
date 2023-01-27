
type PaginationProps = {
  paginationCount: number;
  currentCatalogPage: number;
}

function Pagination ({paginationCount, currentCatalogPage}: PaginationProps): JSX.Element {

  const paginationItems = Array.from({length: paginationCount}, (_, index) => index + 1);

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {paginationItems.map((item) => (
          <li key={item} className="pagination__item"><a className="pagination__link pagination__link--active" href="/">{item}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
