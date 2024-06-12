import { BoardStyle } from '../../../styles/board';
import { Link } from 'react-router-dom';

export default function BoardContent() {
  return (
    <BoardStyle.ContentContainer>
      <Link to={`/1`}>
        <div className="subject">
          <span>자유</span>
        </div>
        <div className="title">
          <p>제목</p>
        </div>
        <div className="desc">
          <p>내용</p>
        </div>
      </Link>
      <button className="like">
        <span className="material-symbols-outlined">favorite</span>
      </button>
    </BoardStyle.ContentContainer>
  );
}
