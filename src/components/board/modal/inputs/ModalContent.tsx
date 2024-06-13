import { ModalStyle } from '../../../../styles/main/modal';

export default function ModalContent() {
  return (
    <ModalStyle.ContentBox>
      <textarea
        name=""
        id=""
        placeholder="상대방 비방 및 욕설과 같은 게시글은 검토 후 삭제 될 수 있습니다."
        cols={20}
        rows={7}
        style={{ textAlign: 'left', resize: 'none' }}
      ></textarea>
    </ModalStyle.ContentBox>
  );
}
