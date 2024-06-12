// 스타일
import { BoardStyle } from '../../styles/board';

// 컴포넌트
import BoardHeader from '../../components/board/main/BoardHeader';
import BoardSort from '../../components/board/main/BoardSort';
import BoardList from '../../components/board/main/BoardList';
import Pagination from '../../components/board/main/Pagination';

export default function BoardMain() {
  return (
    <BoardStyle.Container>
      <BoardStyle.InnerContainer>
        <BoardHeader />
        <BoardSort />
        <BoardList />
        <Pagination />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
