import { useState } from 'react';
import { DetailStyle } from '../../../styles/detail/detail';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

export default function AddComment({ id }: { id: string | undefined }) {
  const starArray = [0, 1, 2, 3, 4];

  const [score, setScore] = useState(0);

  const [isComment, setIsComment] = useState('');

  // 평점
  const starScore = (index: number) => {
    const selectedScore = index + 1;
    setScore(selectedScore);
  };

  const saveComment = async () => {
    try {
      const commentData = {
        score: score,
        content: isComment,
      };
      console.log(commentData);
      const response = await axios.patch(`http://localhost:3001/boards/${id}`, {
        comments: commentData,
      });
      console.log('댓글 업데이트 >', response.data);
      window.location.reload();
    } catch (err) {
      console.log('데이터 댓글 저장 오류>', err);
    }
  };

  return (
    <DetailStyle.AddComment>
      <div className="scoreBox">
        <p>이 게시글을 평가해 주세요</p>
        <div className="stars">
          {starArray.map((star, index) => (
            <FaStar
              key={index}
              size={14}
              onClick={() => starScore(index)}
              className={index < score ? 'gold' : 'grey'}
            />
          ))}
        </div>
        <p> 한줄평을 남겨주세요</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="한줄 평을 남겨주세요!"
          value={isComment}
          onChange={(e) => {
            setIsComment(e.target.value);
          }}
        />
        <button onClick={saveComment}>저장</button>
      </div>
    </DetailStyle.AddComment>
  );
}
