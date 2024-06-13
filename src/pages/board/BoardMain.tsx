// 스타일
import { BoardStyle } from '../../styles/main/board';
import { useState } from 'react';

// 컴포넌트
import BoardHeader from '../../components/board/main/BoardHeader';
import BoardSort from '../../components/board/main/BoardSort';
import BoardList from '../../components/board/main/BoardList';
import Pagination from '../../components/board/main/Pagination';

export default function BoardMain() {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 8;
  const totalPosts = 50;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <BoardStyle.Container>
      <BoardStyle.InnerContainer>
        <BoardHeader />
        <BoardSort />
        <BoardList currentPage={currentPage} postsPerPage={postsPerPage} />
        <Pagination
          pageCount={Math.ceil(totalPosts / postsPerPage)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
