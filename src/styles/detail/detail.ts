import styled from 'styled-components';
import _Colors from '../common/color';

const DetailHeader = styled.div`
  display: flex;
  padding: 0 1rem;
  justify-content: space-between;
  position: relative;
  align-items: center;
  height: auto;
  & > button {
    padding: 0 0.7rem;
    background: none;
    border: none;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    width: 50%;
    display: flex;
    justify-content: center;
  }
  .subject {
    border-radius: 0.5rem;
    padding: 0.2rem 0.7rem;
    background-color: ${_Colors._Gray_4};
    span {
      color: ${_Colors._Gray_0};
    }
  }
`;

const DetailContent = styled.div`
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 30%;
  padding: 1rem 0;
  border-bottom: 1px solid ${_Colors._Gray_4};
  .content {
    /* background-color: red; */
    height: 70%;
    padding: 0 1rem;
  }
  .subContent {
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    .likeBox > button {
      background: none;
      border: none;
    }
    .timeBox > p {
      color: ${_Colors._Gray_4};
    }
  }
`;

const AddComment = styled.div`
  background-color: pink;
`;

export const DetailStyle = {
  DetailHeader,
  DetailContent,
  AddComment,
};
