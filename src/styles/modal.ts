import styled from 'styled-components';
import _Colors from './color';

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  background-color: ${_Colors._Gray_0};
  width: 30%;
  height: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;

const HeaderBox = styled.div`
  display: flex;
  padding: 1rem 1rem;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
  button {
    background: none;
    padding: 0;
    display: flex;
    align-items: center;
    span {
      font-size: 30px;
      color: ${_Colors._dark};
    }
  }
`;

const SubjectBox = styled.div`
  background-color: pink;
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ModalStyle = {
  ModalContainer,
  ModalBox,
  HeaderBox,
  SubjectBox,
};
