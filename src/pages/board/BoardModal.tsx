import { ModalStyle } from '../../styles/modal';

import ModalHeader from '../../components/board/modal/ModalHeader';
import ModalSubject from '../../components/board/modal/inputs/ModalSubject';
import ModalTeam from '../../components/board/modal/inputs/ModalTeam';
import ModalTitle from '../../components/board/modal/inputs/ModalTitle';
import ModalContent from '../../components/board/modal/inputs/ModalContent';
import ModalBtn from '../../components/board/modal/ModalBtn';

interface props {
  open: Boolean;
  close: () => void;
}

export default function BoardModal(props: props) {
  return (
    <ModalStyle.ModalContainer>
      <ModalStyle.ModalBox>
        <ModalHeader close={props.close} />
        <ModalStyle.Labeltitle htmlFor="">주제</ModalStyle.Labeltitle>
        <ModalSubject />
        <ModalStyle.Labeltitle htmlFor="">응원팀</ModalStyle.Labeltitle>
        <ModalTeam />
        <ModalStyle.Labeltitle htmlFor="">제목</ModalStyle.Labeltitle>
        <ModalTitle />
        <ModalStyle.Labeltitle htmlFor="">내용</ModalStyle.Labeltitle>
        <ModalContent />
        <ModalBtn />
      </ModalStyle.ModalBox>
    </ModalStyle.ModalContainer>
  );
}
