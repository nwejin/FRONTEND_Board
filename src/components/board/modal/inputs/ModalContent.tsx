import { ModalStyle } from '../../../../styles/main/modal';
import useBoardStore from '../../../../store/BoardStore';
import { useState } from 'react';

export default function ModalContent() {
  const { setContent, subject, group, team, title } = useBoardStore();

  // console.log(subject, group, team, title);

  const [isContent, setIsContent] = useState('');

  const contentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const contentValue = e.target.value;
    setIsContent(contentValue);
    setContent(contentValue);
  };

  return (
    <ModalStyle.ContentBox>
      <textarea
        name=""
        id=""
        placeholder="상대방 비방 및 욕설과 같은 게시글은 검토 후 삭제 될 수 있습니다."
        cols={20}
        rows={7}
        style={{ textAlign: 'left', resize: 'none' }}
        value={isContent}
        onChange={(e) => {
          contentInput(e);
        }}
      ></textarea>
    </ModalStyle.ContentBox>
  );
}
