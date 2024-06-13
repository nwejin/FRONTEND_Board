import { ModalStyle } from '../../styles/main/modal';

import ModalHeader from '../../components/board/modal/ModalHeader';
import ModalSubject from '../../components/board/modal/inputs/ModalSubject';
import ModalTeam from '../../components/board/modal/inputs/ModalTeam';
import ModalTitle from '../../components/board/modal/inputs/ModalTitle';
import ModalContent from '../../components/board/modal/inputs/ModalContent';
import ModalBtn from '../../components/board/modal/ModalBtn';
import useBoardStore from '../../store/BoardStore';
import { useEffect, useState } from 'react';

interface props {
  open: Boolean;
  close: () => void;
}

export default function BoardModal(props: props) {
  const { subject, group, team, title, content } = useBoardStore();

  console.log(subject, group, team, title, content);

  const [isSubmit, setIsSubmit] = useState(true);

  const [isVerifySubject, setIsVerifySubject] = useState('');
  const [isVerifyTeam, setIsVerifyTeam] = useState('');
  const [isVerifyTitle, setIsVerifyTitle] = useState('');
  const [isVerifyContent, setIsVerifyContent] = useState('');

  useEffect(() => {
    const verify = () => {
      setIsVerifySubject(subject === '' ? '주제를 선택해주세요' : '');
      setIsVerifyTeam(
        group === '' || team === '' ? '응원팀을 선택해주세요' : ''
      );
      setIsVerifyTitle(title === '' ? '제목을 입력해주세요' : '');
      setIsVerifyContent(content === '' ? '내용을 입력해주세요' : '');
    };
    verify();

    if (
      subject !== '' &&
      group !== '' &&
      team !== '' &&
      title !== '' &&
      content !== ''
    ) {
      setIsSubmit(false);
    }
  }, [subject, group, team, title, content]);

  return (
    <ModalStyle.ModalContainer>
      <ModalStyle.ModalBox>
        <ModalHeader close={props.close} />
        <ModalStyle.Labeltitle htmlFor="">
          주제
          <span>{isVerifySubject}</span>
        </ModalStyle.Labeltitle>
        <ModalSubject />
        <ModalStyle.Labeltitle htmlFor="">
          응원팀
          <span>{isVerifyTeam}</span>
        </ModalStyle.Labeltitle>
        <ModalTeam />
        <ModalStyle.Labeltitle htmlFor="">
          제목
          <span>{isVerifyTitle}</span>
        </ModalStyle.Labeltitle>
        <ModalTitle />
        <ModalStyle.Labeltitle htmlFor="">
          내용
          <span>{isVerifyContent}</span>
        </ModalStyle.Labeltitle>
        <ModalContent />
        <ModalBtn isSubmit={isSubmit} />
      </ModalStyle.ModalBox>
    </ModalStyle.ModalContainer>
  );
}
