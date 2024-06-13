import { BoardStyle } from '../../../styles/main/board';

export default function BoardSort() {
  return (
    <BoardStyle.SortConatiner>
      <p>오름차순</p>
      <div>
        <button>
          <span className="material-symbols-outlined">splitscreen</span>
        </button>
        <button>
          <span className="material-symbols-outlined">grid_view</span>
        </button>
      </div>
    </BoardStyle.SortConatiner>
  );
}
