import styled from 'styled-components';
import _Colors from '../common/color';

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
  background-color: ${_Colors._blue};
  border-radius: 1rem 1rem 0 0;
  margin-bottom: 1.5rem;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: ${_Colors._Gray_0};
  }
  button {
    background: none !important;
    padding: 0 !important;
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      font-size: 30px;
      color: ${_Colors._Gray_0};
    }
  }
`;

const SubjectBox = styled.div`
  /* background-color: pink; */
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  ul {
    display: flex;
    li {
      margin: 0 1rem;
      padding: 0.2rem 0.6rem;
      cursor: pointer;
    }
    li:hover {
      background-color: ${_Colors._blue};
      color: ${_Colors._Gray_0};
    }
    .selected {
      color: ${_Colors._white};
      background-color: ${_Colors._blue} !important;
      border-radius: 0.5rem;
    }
    .default {
      color: ${_Colors._Gray_5};
      border: 1px solid ${_Colors._Gray_5};
      border-radius: 0.5rem;
    }
  }
`;

const Teambox = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  select {
    background: none;
    padding: 0.3rem 1.73rem;
    margin: 0 1rem;
    cursor: pointer;
    color: ${_Colors._Gray_5};
    border: 1px solid ${_Colors._Gray_5};
    border-radius: 0.5rem;
  }
  select:hover {
    color: ${_Colors._white};
    background-color: ${_Colors._blue} !important;
    border-radius: 0.5rem;
  }
`;

const TitleBox = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid ${_Colors._Gray_4};
    width: 70%;
    background-color: ${_Colors._Gray_0};
  }
`;

const ContentBox = styled.div`
  padding: 1rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  textarea {
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid ${_Colors._Gray_4};
    width: 70%;
    background-color: ${_Colors._Gray_0};
  }
`;

const Labeltitle = styled.label`
  padding: 0.5rem 5rem 0;
  font-weight: 700;
`;

const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    span {
      color: ${_Colors._Gray_0};
      font-weight: 700;
    }
  }
`;

export const ModalStyle = {
  ModalContainer,
  Labeltitle,
  ModalBox,
  HeaderBox,
  SubjectBox,
  Teambox,
  TitleBox,
  ContentBox,
  BtnBox,
};
