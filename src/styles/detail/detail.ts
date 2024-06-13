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
    .editTitle {
      padding: 0.5rem 0.5rem;
      border-radius: 0.2rem;
      border: 1px solid ${_Colors._Gray_4};
      width: 70%;
      background-color: ${_Colors._Gray_0};
    }
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
    margin-top: 1.5rem;
    /* background-color: red; */
    height: 70%;
    width: 80%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    .editContent {
      padding: 0.5rem 0.5rem;
      border-radius: 0.2rem;
      border: 1px solid ${_Colors._Gray_4};
      width: 70%;
      height: 70%;
      margin-bottom: 0.5rem;
      background-color: ${_Colors._Gray_0};
    }
    .editBtn {
      color: ${_Colors._Gray_0};
      padding: 0.2rem 1.5rem;
      background-color: ${_Colors._red};
      border: none;
      border-radius: 0.5rem;
    }
  }
  .subContent {
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    position: relative;

    .likeBox > button {
      background: none;
      border: none;
      margin-right: 1rem;
      .liked {
        fill: ${_Colors._red};
      }
      .default {
        fill: ${_Colors._Gray_4};
      }
    }
    .timeBox > p {
      color: ${_Colors._Gray_4};
    }
    .teamBox {
      display: flex;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      p {
        background-color: ${_Colors._green};
        border-radius: 0.5rem;
        color: ${_Colors._Gray_0};
        padding: 0.2rem 0.5rem;
        margin: 0 0.2rem;
      }
    }
  }
`;

const AddComment = styled.div`
  padding: 1rem 1rem;
  border-bottom: 1px solid ${_Colors._Gray_4};
  .scoreBox {
    display: flex;
    align-items: center;
    p {
      color: ${_Colors._blue};
      font-size: 0.8rem;
      margin-right: 1rem;
    }
    input {
      width: 50%;
      border: 1px solid ${_Colors._Gray_4};
      padding: 0.1rem 0.5rem;
      border-radius: 0.2rem;
      margin-right: 1rem;
    }
    button {
      padding: 0.1rem 0.5rem;
      border-radius: 0.2rem;
      background-color: ${_Colors._light};
      color: ${_Colors._blue};
      cursor: pointer;
      border: none;
    }
  }
  .stars {
    margin-right: 1rem;
  }
  .gold {
    fill: ${_Colors._yellow} !important;
  }
  .grey {
    fill: ${_Colors._Gray_4} !important;
  }
`;

const CommentBox = styled.div`
  padding: 1rem 1rem;
  border-bottom: 1px solid ${_Colors._Gray_4};

  .scoreBox {
    display: flex;
    align-items: center;
    height: auto;
    .desc {
      color: ${_Colors._blue};
      font-size: 0.8rem;
      margin-right: 1rem;
    }
    .content {
      font-size: 1rem;
      line-height: 1.4;
    }
    .stars {
      margin-right: 1rem;
      .gold {
        fill: ${_Colors._yellow} !important;
      }
      .grey {
        fill: ${_Colors._Gray_4} !important;
      }
    }
  }
`;

export const DetailStyle = {
  DetailHeader,
  DetailContent,
  AddComment,
  CommentBox,
};
