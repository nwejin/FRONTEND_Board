import { ModalStyle } from '../../../styles/main/modal';
import useBoardStore from '../../../store/BoardStore';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ModalBtn({ isSubmit }: { isSubmit: boolean }) {
  const { subject, group, team, title, content } = useBoardStore();

  // console.log(subject, group, team, title, content);

  // console.log(isSubmit);

  const handleSubmit = async () => {
    const currentDate = new Date();
    const formattedDate = `${
      currentDate.getMonth() + 1
    }/${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

    const data = {
      subject: subject,
      group: group,
      team: team,
      title: title,
      content: content,
      date: formattedDate,
      liked: false,
      comments: [],
    };
    try {
      await axios.post('https://tame-chill-parsley.glitch.me/boards', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log(data);
      alert('게시물이 성공적으로 작성되었습니다.');
      window.location.reload();
    } catch (err) {
      console.log('데이터 저장 오류 >', err);

      alert('게시물 작성에 실패했습니다.');
    }
  };

  return (
    <ModalStyle.BtnBox>
      <button onClick={handleSubmit} disabled={isSubmit}>
        <span>작성하기</span>
      </button>
    </ModalStyle.BtnBox>
  );
}
