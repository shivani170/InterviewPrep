import React from 'react'
import './Pagination.css'

interface PaginationProps {
  pages: number;
  page: number;
  setPage: (page: number) => void;
}

const Pagination = ({ pages, page, setPage }: PaginationProps) => {
  const pageNumbers = Array.from({ length: pages }, (_, i) => i + 1)
  console.log(pageNumbers)

  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-btn arrow"
        onClick={() => setPage(Math.max(1, page - 1))}
        disabled={page === 1}
        aria-label="Previous page"
      >
        &larr;
      </button>


      <div className="page-numbers-container">
        {pageNumbers.map((num) => (
          <button
            key={num}
            className={`pagination-btn num ${page === num ? 'active' : ''}`}
            onClick={() => setPage(num)}
            aria-current={page === num ? 'page' : undefined}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        className="pagination-btn arrow"
        onClick={() => setPage(Math.min(pages, page + 1))}
        disabled={page === pages}
        aria-label="Next page"
      >
        &rarr;
      </button>
    </div>
  )
}

export default Pagination
