// 스타일
import { BoardStyle } from '../../styles/board';

// 컴포넌트

export default function BoardDetail() {
  return (
    <BoardStyle.Container>
      <BoardStyle.InnerContainer>
        <p>제목</p>
        <p>내용</p>
        <p>댓글</p>
        <p>좋아요</p>
        <p>평점</p>
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
