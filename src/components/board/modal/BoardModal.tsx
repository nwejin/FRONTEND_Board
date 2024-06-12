import { ModalStyle } from '../../../styles/modal';

import ModalHeader from './ModalHeader';
import ModalSubject from './inputs/ModalSubject';
import ModalTeam from './inputs/ModalTeam';
import ModalTitle from './inputs/ModalTitle';
import ModalContent from './inputs/ModalContent';

interface props {
  open: Boolean;
  close: () => void;
}

export default function BoardModal(props: props) {
  return (
    <ModalStyle.ModalContainer onClick={props.close}>
      <ModalStyle.ModalBox>
        <ModalHeader close={props.close} />
        <ModalSubject />
        <ModalTeam />
        <ModalTitle />
        <ModalContent />
      </ModalStyle.ModalBox>
    </ModalStyle.ModalContainer>
  );
}
