import { BoardStyle } from '../../../styles/main/board';
import { Link } from 'react-router-dom';

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
export default function BoardContent({ board }: { board: Board }) {
  return (
    <BoardStyle.ContentContainer>
      <Link to={`/${board.id}`}>
        <div className="subject">
          <span>{board.subject}</span>
        </div>
        <div className="title">
          <p>{board.title}</p>
        </div>
        <div className="desc">
          <p>{board.content}</p>
        </div>
        <div className="date">
          <p>{board.date}</p>
        </div>
      </Link>
    </BoardStyle.ContentContainer>
  );
}
