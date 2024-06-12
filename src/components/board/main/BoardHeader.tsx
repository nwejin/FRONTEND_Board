import { useState } from 'react';
import { BoardStyle } from '../../../styles/board';
import BoardModal from '../modal/BoardModal';

export default function BoardHeader() {
  const [modal, setModal] = useState<Boolean>(true);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <BoardStyle.BoardHeader>
      <ul>
        <li>자유</li>
        <li>경기후기</li>
        <li>선수후기</li>
      </ul>
      <input type="text" name="" id="" placeholder="검색어를 입력해주세요" />
      <button onClick={openModal}>
        <span>게시글 추가</span>
      </button>
      {modal && <BoardModal open={modal} close={closeModal} />}
    </BoardStyle.BoardHeader>
  );
}
