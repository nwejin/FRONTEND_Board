import { useState } from 'react';
import { DetailStyle } from '../../../styles/detail/detail';

import { FaStar } from 'react-icons/fa';

export default function AddComment() {
  const starArray = [0, 1, 2, 3, 4];

  const [score, setScore] = useState([false, false, false, false, false]);

  const starScore = (index: number) => {
    let star = [...score];
    for (let i = 0; i < 5; i++) {
      star[i] = i <= index ? true : false;
    }
    setScore(star);
    console.log(score);
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
              className={score[index] ? 'gold' : 'grey'}
            />
          ))}
        </div>
        <p> 한줄평을 남겨주세요</p>
        <input type="text" name="" id="" placeholder="한줄 평을 남겨주세요!" />
      </div>
    </DetailStyle.AddComment>
  );
}
