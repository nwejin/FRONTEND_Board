import React from 'react';
import ReactPaginate from 'react-paginate';

import { BoardStyle } from '../../../styles/main/board';

export default function Pagination({
  pageCount,
  onPageChange,
  currentPage,
}: any) {
  return (
    <BoardStyle.PaginationContainer>
      <ReactPaginate
        previousLabel={
          <span className="material-symbols-outlined">chevron_left</span>
        }
        nextLabel={
          <span className="material-symbols-outlined">chevron_right</span>
        }
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName={'pagination'}
        pageLinkClassName={'pagination__link'}
        activeLinkClassName={'pagination__link__active'}
      />
    </BoardStyle.PaginationContainer>
  );
}
