import { BoardStyle } from '../../../styles/main/board';
import { BsFillGridFill } from 'react-icons/bs';
import { useState } from 'react';
import { RiFileListLine } from 'react-icons/ri';

import useBoardStore from '../../../store/BoardStore';

export default function BoardView() {
  const { view, setView, setSort, sort } = useBoardStore();
  // const [isView, setisView] = useState(true);

  const viewSet = (value: boolean) => {
    // setisView(value);
    setView(value);
  };
  return (
    <BoardStyle.ViewConatiner>
      <ul>
        <li
          onClick={() => {
            // 기본값 true
            setSort(!sort);
          }}
          className={sort ? 'latest' : 'oldest'}
        >
          오래된순
        </li>
      </ul>
      <div className="ViewBox">
        <button
          onClick={() => {
            viewSet(true);
          }}
        >
          <RiFileListLine className={view ? 'active' : 'default'} size={24} />
        </button>
        <button
          onClick={() => {
            viewSet(false);
          }}
        >
          <BsFillGridFill className={view ? 'default' : 'active'} size={22} />
        </button>
      </div>
    </BoardStyle.ViewConatiner>
  );
}
