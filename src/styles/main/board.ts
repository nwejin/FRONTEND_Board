import styled from 'styled-components';
import _Colors from '../common/color';

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
  /* background-color: ${_Colors._Gray_0}; */
  /* background-color: pink; */
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
    .default {
      margin-right: 1rem;
      color: ${_Colors._Gray_6};
    }
    .default:hover {
      font-weight: 700;
      color: ${_Colors._blue};
    }
    .active {
      margin-right: 1rem;
      font-weight: 700;
      color: ${_Colors._blue};
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
    display: flex;
    align-items: center;
    span {
      color: ${_Colors._Gray_0};
    }
    .icons {
      background-color: ${_Colors._green};
      fill: ${_Colors._Gray_0};
    }
  }
`;

const ViewConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5%;
  align-items: center;
  margin: 1rem 0;
  .ViewBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    button {
      background: none;
      border: none;
      display: flex;
      align-items: center;
      width: 2rem;
      height: 2rem;
      justify-content: center;
      .default {
        fill: ${_Colors._Gray_5};
      }
      .active {
        fill: ${_Colors._blue};
      }
    }
  }
  .oldest {
    margin-right: 1rem !important;
    font-weight: 700;
    color: ${_Colors._blue};
  }
  .oldest:hover {
    font-weight: 700;
    color: ${_Colors._blue};
  }
  .latest {
    margin-right: 1rem;
    color: ${_Colors._Gray_6} !important;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 70%;
  border-radius: 0.5rem;
  border: 1px solid ${_Colors._Gray_4};
  padding: 1rem 0;
  position: relative;
  .notFound {
    /* background-color: pink; */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .notFoundText {
      color: ${_Colors._blue};
      font-size: 1.2rem;
    }
  }
`;

const ListContentContainer = styled.div`
  /* background-color: pink; */
  margin: 0.5rem 0;
  height: 10%;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  /* justify-content: flex-start; */
  position: relative;
  border-bottom: 1px solid ${_Colors._Gray_4};
  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    overflow: hidden;
    & > .subject {
      /* background-color: pink; */
      width: 5rem;
      min-width: 5rem;
      span {
        border-radius: 0.2rem;
        padding: 0.2rem 0.5rem;
        background-color: ${_Colors._Gray_4};
        color: ${_Colors._Gray_0};
      }
    }
    .groupTeam {
      /* background-color: pink; */
      /* position: absolute;
      left: 7rem; */
      width: 9rem;
      min-width: 9rem;
      display: flex;
      justify-content: space-between;
      margin-right: 1rem;
      span {
        background-color: ${_Colors._green};
        border-radius: 0.5rem;
        color: ${_Colors._Gray_0};
        padding: 0.2rem 0.5rem;
        margin: 0 0.2rem;
      }
    }
    .title {
      /* background-color: pink; */
      width: 15%;
      margin-right: 1rem;
      /* position: absolute;
      left: 18rem; */
      border-right: 0.2rem solid ${_Colors._Gray_4};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: normal;
      line-height: 1.5;
      p {
        font-weight: 700;
      }
    }
    .subBox {
      display: flex;
      /* background-color: red; */
      justify-content: space-between;
      width: 100%;
      .desc {
        font-size: 1rem;
        /* background-color: red; */
        width: 60%;
        /* position: absolute;
      left: 30rem; */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        white-space: normal;
        line-height: 1.5;
      }
      .date {
        /* background-color: pink; */
        p {
          font-size: 0.9rem;
          color: ${_Colors._Gray_4};
        }
      }
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  height: 70%;
  grid-auto-columns: 4;
  grid-auto-rows: 1fr;
  .notFound {
    /* background-color: pink; */
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: calc(1rem + 1px);
    .notFoundText {
      color: ${_Colors._blue};
      font-size: 1.2rem;
    }
  }
`;

const GirdContentContainer = styled.div`
  /* background-color: blue; */
  margin: 0.5rem 0;
  height: 15rem;
  max-height: 15rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${_Colors._Gray_4};
  justify-content: space-between;
  position: relative;
  a {
    /* background-color: pink; */
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .topBox {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .groupTeam {
      display: flex;
      span {
        background-color: ${_Colors._green};
        border-radius: 0.5rem;
        color: ${_Colors._Gray_0};
        padding: 0.2rem 0.7rem;
        margin: 0 0.2rem;
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

    .title {
      /* background-color: blue; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: normal;
      line-height: 1.5;
      p {
        font-weight: 700;
      }
    }
    .desc {
      /* background-color: red; */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: normal;
      line-height: 1.5;
    }
    .date {
      p {
        font-size: 0.9rem;
        color: ${_Colors._Gray_4};
      }
    }
  }
`;

const PaginationContainer = styled.div`
  /* background-color: red; */
  display: flex;
  height: 10%;
  align-items: center;
  justify-content: center;
  .pagination {
    display: flex;
    align-items: center;
    /* background-color: pink; */
    a {
      display: flex;
      align-items: center;
    }
    span {
      /* font-weight: 700; */
      font-size: 1.2rem;
    }
  }
  .pagination__link {
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    background: none;
    border: none;
    height: auto;
    border-radius: 0.5rem;
  }
  .pagination__link__active {
    background-color: ${_Colors._blue};
    color: ${_Colors._Gray_0};
  }
`;

export const BoardStyle = {
  Container,
  BoardHeader,
  InnerContainer,
  ViewConatiner,
  ListContainer,
  ListContentContainer,
  PaginationContainer,
  GridContainer,
  GirdContentContainer,
};
