import { BoardStyle } from '../../../styles/main/board';

import BoardContent from './BoardContent';

interface BoardListProps {
  currentPage: number;
  postsPerPage: number;
}

export default function BoardList({
  currentPage,
  postsPerPage,
}: BoardListProps) {
  const test = Array.from({ length: 80 }, (_, i) => i + 1);
  console.log(test);

  const indexOfLastPost = (currentPage + 1) * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = test.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <BoardStyle.ListContainer>
      {currentPosts.map((test, index) => (
        <BoardContent key={index} test={test} />
      ))}
    </BoardStyle.ListContainer>
  );
}
