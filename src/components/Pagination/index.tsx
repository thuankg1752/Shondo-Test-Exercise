import React from 'react';
import { IPagination } from '../../constant/interface.ts';
import './Pagination.less';

export const Pagination: React.FC<IPagination> = ({ ...props }: IPagination) => {
  const { currentPage, totalPages, handlePageChange, loading } = props;
  return (
    totalPages === 0 ? <React.Fragment></React.Fragment> :
      <div className="pagination__container">
        <button
          className="pagination__per-page"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1 || loading}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`pagination__per-page ${currentPage === index + 1 ? 'pagination__per-page--active' : ''}`}

          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination__per-page"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages || loading}
        >
          &gt;
        </button>
      </div>
  );
};



