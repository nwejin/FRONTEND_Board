import { BoardStyle } from '../../../styles/board';

import BoardContent from './BoardContent';

export default function BoardList() {
  const test = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <BoardStyle.ListContainer>
      {test.map((test, index) => (
        <BoardContent key={index} />
      ))}
    </BoardStyle.ListContainer>
  );
}
