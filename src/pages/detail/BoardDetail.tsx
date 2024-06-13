// 스타일
import { BoardStyle } from '../../styles/main/board';
import { DetailStyle } from '../../styles/detail/detail';
import { IoArrowBack } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// 컴포넌트
import AddComment from '../../components/board/detail/AddComment';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Board {
  id: string;
  subject: string;
  group: string;
  team: string;
  title: string;
  content: string;
  date: string;
  liked: boolean;
}

export default function BoardDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [boards, setBoards] = useState<Board | undefined>();

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/boards/${id}`);
        console.log(response.data);
        setBoards(response.data);
      } catch (err) {
        console.log('상세 페이지 불러오기 > ', err);
      }
    };
    getBoard();
  }, []);

  return (
    <BoardStyle.Container>
      <BoardStyle.InnerContainer>
        <DetailStyle.DetailHeader>
          <button
            onClick={() => {
              navigate('/');
            }}
          >
            <IoArrowBack size={24} />
          </button>
          <div className="title">
            <h3>{boards?.title}</h3>
          </div>
          <div className="subject">
            <span>{boards?.subject}</span>
          </div>
        </DetailStyle.DetailHeader>
        <DetailStyle.DetailContent>
          <div className="content">
            <p>{boards?.content}</p>
          </div>
          <div className="subContent">
            <div className="likeBox">
              <button>
                <FaHeart />
              </button>
            </div>
            <div className="timeBox">
              <p>{boards?.date}</p>
            </div>
          </div>
        </DetailStyle.DetailContent>
        <AddComment />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
