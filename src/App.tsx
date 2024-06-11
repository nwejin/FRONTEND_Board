import React from 'react';
import styled from 'styled-components';
import _Colors from './styles/color';

//컴포넌트
import Header from '../src/components/Header';

const Test = styled.div`
  background-color: ${_Colors._Gray_3};
  width: 30px;
  height: 30px;
`;

function App() {
  return (
    <div className="App">
      <Header />
      <p>테스트</p>
      <Test></Test>
    </div>
  );
}

export default App;
