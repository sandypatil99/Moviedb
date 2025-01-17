const Pagination = ({ currentPage, onPageChange }) => {
    const handlePrev = () => onPageChange(Math.max(currentPage - 1, 1));
    const handleNext = () => onPageChange(currentPage + 1);
  
    return (
      <div className="pagination">
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    );
  };
  
  export default Pagination;
  