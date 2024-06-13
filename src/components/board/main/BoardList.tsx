import { BoardStyle } from '../../../styles/main/board';

import BoardContent from './BoardContent';

import useBoardStore from '../../../store/BoardStore';

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

interface BoardListProps {
  currentPosts: Board[]; // Board 배열 타입
}

export default function BoardList({ currentPosts }: BoardListProps) {
  const { view } = useBoardStore();

  // console.log('view', view);
  return view ? (
    <BoardStyle.ListContainer>
      {currentPosts.map((board: Board) => (
        <BoardContent key={board.id} board={board} />
      ))}
    </BoardStyle.ListContainer>
  ) : (
    <BoardStyle.GridContainer>
      {currentPosts.map((board: Board) => (
        <BoardContent key={board.id} board={board} />
      ))}
    </BoardStyle.GridContainer>
  );
}
