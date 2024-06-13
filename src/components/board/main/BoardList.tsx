import { BoardStyle } from '../../../styles/main/board';

import BoardContent from './BoardContent';

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
  return (
    <BoardStyle.ListContainer>
      {currentPosts.map((board: Board) => (
        <BoardContent key={board.id} board={board} />
      ))}
    </BoardStyle.ListContainer>
  );
}
