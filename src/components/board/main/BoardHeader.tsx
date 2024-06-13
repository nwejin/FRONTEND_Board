import { useState } from 'react';
import { BoardStyle } from '../../../styles/main/board';
import BoardModal from '../../../pages/board/BoardModal';
import { IoIosFootball } from 'react-icons/io';
import useBoardStore from '../../../store/BoardStore';

export default function BoardHeader() {
  const [modal, setModal] = useState<Boolean>(false);
  const { filter, setFilter } = useBoardStore();

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  // const [checked, setChecked] = useState('전체');

  const contentFilter = (value: string) => {
    // setChecked(value);
    setFilter(value);
  };

  return (
    <BoardStyle.BoardHeader>
      <ul>
        <li
          onClick={() => {
            contentFilter('전체');
          }}
          className={filter === '전체' ? 'active' : 'default'}
        >
          전체
        </li>
        <li
          onClick={() => {
            contentFilter('자유');
          }}
          className={filter === '자유' ? 'active' : 'default'}
        >
          자유
        </li>
        <li
          onClick={() => {
            contentFilter('경기후기');
          }}
          className={filter === '경기후기' ? 'active' : 'default'}
        >
          경기후기
        </li>
        <li
          onClick={() => {
            contentFilter('선수후기');
          }}
          className={filter === '선수후기' ? 'active' : 'default'}
        >
          선수후기
        </li>
      </ul>
      <input type="text" name="" id="" placeholder="검색어를 입력해주세요" />
      <button onClick={openModal}>
        <span>게시글 추가</span>
        <IoIosFootball className="icons" />
      </button>
      {modal && <BoardModal open={modal} close={closeModal} />}
    </BoardStyle.BoardHeader>
  );
}
