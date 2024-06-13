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
  comments: CommentData;
}

export default function Comment({ id }: { id: string | undefined }) {
  const starArray = [0, 1, 2, 3, 4];
  const [commentData, setCommentData] = useState<CommentData | null>(null); // 댓글 데이터 상태

  useEffect(() => {
    // 게시판 데이터를 가져오는 비동기 함수
    const fetchBoard = async () => {
      try {
        const response = await axios.get<Board>(
          `http://localhost:3001/boards/${id}`
        );
        setCommentData(response.data.comments);
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
      <div className="scoreBox">
        <p className="desc">별점</p>
        <div className="stars">
          {starArray.map((star, index) => (
            <FaStar
              key={index}
              size={14}
              className={index < (commentData?.score || 0) ? 'gold' : 'grey'}
            />
          ))}
        </div>
        <p className="desc">한줄평</p>
        <p className="content">{commentData?.content}</p>
      </div>
    </DetailStyle.CommentBox>
  );
}
