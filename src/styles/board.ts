import styled from 'styled-components';
import _Colors from './color';

const Container = styled.div`
  background-color: ${_Colors._Gray_0};
  width: 100vw;
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerContainer = styled.div`
  width: 60%;
  max-width: 60%;
  height: 80%;
  background-color: ${_Colors._Gray_0};
`;

const BoardHeader = styled.div`
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid ${_Colors._Gray_4};
  & > ul {
    display: flex;
    width: auto;
    justify-content: space-between;
    li {
      /* color: ${_Colors._dark}; */
      margin-right: 1rem;
      color: ${_Colors._Gray_6};
      &:hover {
        font-weight: 700;
        color: ${_Colors._blue};
      }
    }
  }
  & > input {
    width: 30%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    /* background-color: pink; */
    padding: 0.5rem 0.5rem;
    border-radius: 0.2rem;
    border: 1px solid ${_Colors._Gray_4};
  }
  button {
    background-color: ${_Colors._green};
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
    border: none;
    span {
      color: ${_Colors._Gray_0};
    }
  }
`;

const SortConatiner = styled.div`
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  height: 5%;
  align-items: center;
  margin: 1rem 0;
  div {
    /* width: 5%; */
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    button {
      background: none;
      border: none;
      color: 'black';
      display: flex;
      align-items: center;
      span {
        color: ${_Colors._Gray_5};
        margin-left: 0.5rem;
      }
    }
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  height: 70%;
  border: 1px solid ${_Colors._Gray_4};
  padding: 1rem 0;
`;

const ContentContainer = styled.div`
  /* background-color: pink; */
  margin: 0.5rem 0;
  height: 10%;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid ${_Colors._Gray_4};
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .subject {
      border-radius: 0.5rem;
      padding: 0.2rem 0.7rem;
      background-color: ${_Colors._Gray_4};
      span {
        color: ${_Colors._Gray_0};
      }
    }
    .title {
      /* background-color: pink; */
      width: 15%;
      position: absolute;
      left: 10%;
      border-right: 0.2rem solid ${_Colors._Gray_4};
      p {
        font-weight: 700;
      }
    }
    .desc {
      /* background-color: red; */
      width: 50%;
      position: absolute;
      left: 30%;
    }
  }
  .like {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    span {
      color: ${_Colors._Gray_4};
    }
  }
`;

const PaginationContainer = styled.div`
  /* background-color: red; */
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    /* background-color: pink; */
  }
  button {
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    background: none;
    border: none;
    height: auto;
    /* background-color: red; */
    span {
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

export const BoardStyle = {
  Container,
  BoardHeader,
  InnerContainer,
  SortConatiner,
  ListContainer,
  ContentContainer,
  PaginationContainer,
};
