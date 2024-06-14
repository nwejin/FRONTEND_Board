// 스타일
import { BoardStyle } from '../../styles/main/board';
import { DetailStyle } from '../../styles/detail/detail';
import { IoArrowBack } from 'react-icons/io5';
import { FaHeart } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AddComment from '../../components/board/detail/AddComment';
import Comment from '../../components/board/detail/Comment';
import { useEffect, useState } from 'react';
import axios from 'axios';
import useBoardStore from '../../store/BoardStore';

interface Board {
  id: string;
  subject: string;
  group: string;
  team: string;
  title: string;
  content: string;
  date: string;
  liked: boolean;
  comments: { score: number; content: string }[];
}

export default function BoardDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(id);
  const [boards, setBoards] = useState<Board | undefined>();

  const { liked: boardLiked, setLiked: setBoardLiked } = useBoardStore();

  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getBoard = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/boards/${id}`);
        console.log(response.data);
        setBoards(response.data);
        setIsLiked(response.data.liked);
      } catch (err) {
        console.log('상세 페이지 불러오기 > ', err);
      }
    };
    getBoard();
  }, [id]);

  const toggleLike = async () => {
    try {
      await axios.patch(`http://localhost:3001/boards/${id}`, {
        liked: !isLiked,
      });
      setBoardLiked(!boardLiked); // 좋아요
      setIsLiked((prevIsLiked) => !prevIsLiked);
      console.log('좋아요 상태가 업데이트 되었습니다.');
      window.location.reload();
    } catch (error) {
      console.log('좋아요 오류 > ', error);
    }
  };

  const deleteBoard = async () => {
    try {
      await axios.delete(`http://localhost:3001/boards/${id}`);
      alert('게시글이 삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.log('게시글 삭제 오류 > ', error);
    }
  };

  // 수정 버튼 클릭시 제목, 내용 수정 가능 하게
  const [edit, setIsEdit] = useState(false); // 상태

  const [editedTitle, setEditedTitle] = useState(''); // 제목
  const [editedContent, setEditedContent] = useState(''); // 내용

  const saveChanges = async () => {
    try {
      await axios.patch(`/api/boards/${id}`, {
        title: editedTitle || boards?.title,
        content: editedContent || boards?.content,
      });
      alert('게시글이 수정되었습니다.');
      window.location.reload();
    } catch (error) {
      console.log('게시글 수정 오류 > ', error);
    }
  };

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
            {edit ? (
              <input
                type="text"
                placeholder={boards?.title}
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="editTitle"
              />
            ) : (
              <h3>{boards?.title}</h3>
            )}
          </div>
          <div className="subject">
            <span>{boards?.subject}</span>
          </div>
        </DetailStyle.DetailHeader>
        <DetailStyle.DetailContent>
          <div className="content">
            {edit ? (
              <>
                <textarea
                  placeholder={boards?.content}
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="editContent"
                  style={{ textAlign: 'left', resize: 'none' }}
                />
                <button onClick={saveChanges} className="editBtn">
                  저장
                </button>
              </>
            ) : (
              <p>{boards?.content}</p>
            )}
          </div>
          <div className="subContent">
            <div className="likeBox">
              <button onClick={toggleLike}>
                <FaHeart
                  className={boards?.liked ? 'liked' : 'default'}
                  size={18}
                />
              </button>
              <button onClick={() => setIsEdit(!edit)}>
                <MdEdit className={'default'} size={22} />
              </button>
              <button onClick={deleteBoard}>
                <MdDelete className={'default'} size={22} />
              </button>
            </div>
            <div className="teamBox">
              <p>{boards?.group}</p>

              <p>{boards?.team}</p>
            </div>
            <div className="timeBox">
              <p>{boards?.date}</p>
            </div>
          </div>
        </DetailStyle.DetailContent>
        <AddComment id={id} />
        <Comment id={id} />
      </BoardStyle.InnerContainer>
    </BoardStyle.Container>
  );
}
