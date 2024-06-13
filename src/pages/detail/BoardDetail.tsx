// 스타일
import { BoardStyle } from '../../styles/main/board';
import { DetailStyle } from '../../styles/detail/detail';
import { IoArrowBack } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
// 컴포넌트
import Comment from '../../components/board/detail/Comment';

export default function BoardDetail() {
  const navigate = useNavigate();

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
            <h3>Lorem ipsum dolor sit amet</h3>
          </div>
          <div className="subject">
            <span>주제</span>
          </div>
        </DetailStyle.DetailHeader>
        <DetailStyle.DetailContent>
          <div className="content">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              cupiditate dolorum dignissimos dolores aliquam facilis fugiat
              possimus molestias totam. Illum sed totam omnis reiciendis harum
            </p>
          </div>
          <div className="subContent">
            <div className="likeBox">
              <button>
                <FaHeart />
              </button>
            </div>
            <div className="timeBox">
              <p>6/13 16:00</p>
            </div>
          </div>
        </DetailStyle.DetailContent>
        <Comment />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
