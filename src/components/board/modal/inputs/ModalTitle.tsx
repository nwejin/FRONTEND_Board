import { ModalStyle } from '../../../../styles/main/modal';
import useBoardStore from '../../../../store/BoardStore';
import { useState } from 'react';

export default function ModalTitle() {
  const { setTitle, subject, group, team } = useBoardStore();

  // console.log(subject, , team);

  const [isTitle, setIsTitle] = useState('');

  const titleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const titleValue = e.target.value;
    setIsTitle(titleValue);
    setTitle(titleValue);
  };

  return (
    <ModalStyle.TitleBox>
      <input
        type="text"
        name=""
        id=""
        placeholder="제목을 입력해주세요"
        value={isTitle}
        onChange={(e) => {
          titleInput(e);
        }}
      />
    </ModalStyle.TitleBox>
  );
}
