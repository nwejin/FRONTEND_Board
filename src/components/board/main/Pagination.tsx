import { BoardStyle } from '../../../styles/board';

export default function Pagination() {
  return (
    <BoardStyle.PaginationContainer>
      <div>
        <button>
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button>
          <span>1</span>
        </button>
        <button>
          <span>2</span>
        </button>
        <button>
          <span>3</span>
        </button>
        <button>
          <span>4</span>
        </button>
        <button>
          <span>5</span>
        </button>
        <button>
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </BoardStyle.PaginationContainer>
  );
}
