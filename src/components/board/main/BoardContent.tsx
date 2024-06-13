import { BoardStyle } from '../../../styles/main/board';
import { Link } from 'react-router-dom';

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
export default function BoardContent({ board }: { board: Board }) {
  const { view } = useBoardStore();

  return view ? (
    <BoardStyle.ListContentContainer>
      <Link to={`/${board.id}`}>
        <div className="subject">
          <span>{board.subject}</span>
        </div>
        <div className="groupTeam">
          <span>{board.group}</span>
          <span>{board.team}</span>
        </div>
        <div className="title">
          <p>{board.title}</p>
        </div>
        <div className="subBox">
          <div className="desc">
            <p>{board.content}</p>
          </div>
          <div className="date">
            <p>{board.date}</p>
          </div>
        </div>
      </Link>
    </BoardStyle.ListContentContainer>
  ) : (
    <BoardStyle.GirdContentContainer>
      <Link to={`/${board.id}`}>
        <div className="topBox">
          <div className="subject">
            <span>{board.subject}</span>
          </div>
          <div className="groupTeam">
            <span>{board.group}</span>
            <span>{board.team}</span>
          </div>
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
    </BoardStyle.GirdContentContainer>
  );
}
