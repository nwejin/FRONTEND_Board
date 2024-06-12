import { BoardStyle } from '../../../styles/board';

export default function BoardContent() {
  return (
    <BoardStyle.ContentContainer>
      <div className="subject">
        <span>자유</span>
      </div>
      <div className="title">
        <p>제목</p>
      </div>
      <div className="desc">
        <p>내용</p>
      </div>
      <div className="like">
        <span className="material-symbols-outlined">favorite</span>
      </div>
    </BoardStyle.ContentContainer>
  );
}
