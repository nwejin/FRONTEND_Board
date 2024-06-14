import { useState, useEffect } from 'react';
import { DetailStyle } from '../../../styles/detail/detail';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

// 댓글 데이터 타입 정의
interface CommentData {
  score: number;
  content: string;
}

// 게시판 데이터 타입 정의
interface Board {
  id: string;
  subject: string;
  group: string;
  team: string;
  title: string;
  content: string;
  date: string;
  liked: boolean;
  comments: CommentData[];
}

export default function Comment({ id }: { id: string | undefined }) {
  const starArray = [0, 1, 2, 3, 4];
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await axios.get<Board>(
          `http://https://frontend-board-jjk6.vercel.app/${id}`
        );
        setComments(response.data.comments);
      } catch (error) {
        console.error('게시판 데이터 불러오기 실패:', error);
      }
    };
    // id가 존재할 때만 데이터를 가져옴
    if (id) {
      fetchBoard();
    }
  }, [id]);

  return (
    <DetailStyle.CommentBox>
      {comments.map((comment, index) => (
        <div key={index} className="scoreBox">
          <p className="desc">별점</p>
          <div className="stars">
            {starArray.map((star, starIndex) => (
              <FaStar
                key={starIndex}
                size={14}
                className={starIndex < comment.score ? 'gold' : 'grey'}
              />
            ))}
          </div>
          <p className="desc">한줄평</p>
          <p className="content">{comment.content}</p>
        </div>
      ))}
    </DetailStyle.CommentBox>
  );
}
