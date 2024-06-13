import { ModalStyle } from '../../../styles/main/modal';

interface props {
  close: () => void;
}

export default function ModalHeader(props: props) {
  return (
    <ModalStyle.HeaderBox>
      <p>게시글 작성</p>
      <button onClick={props.close}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </ModalStyle.HeaderBox>
  );
}
