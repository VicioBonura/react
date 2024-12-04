import "./Pagination.css";

type PaginationProps = {
    goToPrevPage: () => void;
    goToNextPage: () => void;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
    page: number;
    totalPages: number;
    onLimitChange: (limit: number) => void;
}

const Pagination = ({goToPrevPage, goToNextPage, hasPreviousPage, hasNextPage, page, totalPages, onLimitChange}: PaginationProps) => {

    return  <div className="pagination--container">
                <button className="pagination--button" onClick={goToPrevPage} disabled={hasPreviousPage}>Previous Page</button>
                <select className="pagination--select" onChange={(e) => onLimitChange(parseInt(e.target.value))}>
                    <option value={20}>20</option>
                    <option value={40}>40</option>
                    <option value={60}>60</option>
                </select>
                <label htmlFor="pagination--select">Items per page</label>
                <div className="pagination--current">Current Page: {page + 1} of {totalPages}</div>
                <button className="pagination--button" onClick={goToNextPage} disabled={hasNextPage}>Next Page</button>
            </div>
}

export default Pagination;
