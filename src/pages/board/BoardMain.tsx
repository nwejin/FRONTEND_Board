// 스타일
import { BoardStyle } from '../../styles/main/board';
import { useState, useEffect } from 'react';
import axios from 'axios';

// 컴포넌트
import BoardHeader from '../../components/board/main/BoardHeader';
import BoardView from '../../components/board/main/BoardView';
import BoardList from '../../components/board/main/BoardList';
import Pagination from '../../components/board/main/Pagination';
import useBoardStore from '../../store/BoardStore';

interface Board {
  id: string;
  subject: string;
  group: string;
  team: string;
  title: string;
  content: string;
  date: string;
  liked: boolean;
}

export default function BoardMain() {
  const { filter, sort } = useBoardStore();

  // console.log('filter > ', filter);
  console.log('sort', sort);
  // 게시글 불러오기
  const [boards, setBoards] = useState<Board[]>([]);
  const [filteredBoards, setFilteredBoards] = useState<Board[]>([]);

  // 정렬
  const sortBoards = (boards: Board[], sort: boolean) => {
    return boards.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      if (sort) {
        return dateB.getTime() - dateA.getTime(); // 최신순
      } else {
        return dateA.getTime() - dateB.getTime(); // 오래된 순
      }
    });
  };

  // 전체 게시글
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/boards');
        // console.log(response.data);
        const sortedData = sortBoards(response.data, sort);
        setBoards(sortedData);
      } catch (err) {
        console.log('데이터 불러오기 >', err);
      }
    };
    fetchData();
  }, [sort]);

  useEffect(() => {
    const filterPosts = () => {
      switch (filter) {
        // filter 값으로
        case '자유':
        case '경기후기':
        case '선수후기':
          setFilteredBoards(
            boards.filter((board: Board) => board.subject === filter)
          );
          break;
        case '전체':
        default:
          setFilteredBoards(boards);
          break;
      }
    };

    filterPosts();
  }, [filter, boards]);

  // 페이징
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 8;

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  // 한페이지 출력 데이터
  const currentPosts = filteredBoards.slice(
    indexOfFirstPost,
    indexOfFirstPost + postsPerPage
  );

  return (
    <BoardStyle.Container>
      <BoardStyle.InnerContainer>
        <BoardHeader />
        <BoardView />
        <BoardList currentPosts={currentPosts} />
        <Pagination
          pageCount={Math.ceil(filteredBoards.length / postsPerPage)}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
