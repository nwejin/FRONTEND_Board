import { useEffect, useState } from 'react';
import { ModalStyle } from '../../../../styles/main/modal';
import useBoardStore from '../../../../store/BoardStore';

export default function ModalSubject() {
  const { setSubject } = useBoardStore();
  const [selected, setSelected] = useState('');

  const subjectSelect = (value: string) => {
    setSelected(value);
    setSubject(value);
  };

  return (
    <ModalStyle.SubjectBox>
      <ul>
        <li
          className={selected === '자유' ? 'selected' : 'default'}
          onClick={() => {
            subjectSelect('자유');
          }}
        >
          자유
        </li>
        <li
          className={selected === '경기후기' ? 'selected' : 'default'}
          onClick={() => {
            subjectSelect('경기후기');
          }}
        >
          경기후기
        </li>
        <li
          className={selected === '선수후기' ? 'selected' : 'default'}
          onClick={() => {
            subjectSelect('선수후기');
          }}
        >
          선수후기
        </li>
      </ul>
    </ModalStyle.SubjectBox>
  );
}
