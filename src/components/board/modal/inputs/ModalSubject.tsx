import { useState } from 'react';
import { ModalStyle } from '../../../../styles/modal';

export default function ModalSubject() {
  const [selected, setSelected] = useState('');
  return (
    <ModalStyle.SubjectBox>
      <ul>
        <li
          className={selected === '자유' ? 'selected' : 'default'}
          onClick={() => {
            setSelected('자유');
          }}
        >
          자유
        </li>
        <li
          className={selected === '경기후기' ? 'selected' : 'default'}
          onClick={() => {
            setSelected('경기후기');
          }}
        >
          경기후기
        </li>
        <li
          className={selected === '선수후기' ? 'selected' : 'default'}
          onClick={() => {
            setSelected('선수후기');
          }}
        >
          선수후기
        </li>
      </ul>
    </ModalStyle.SubjectBox>
  );
}
