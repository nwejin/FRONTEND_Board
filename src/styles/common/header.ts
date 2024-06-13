import styled from 'styled-components';
import _Colors from './color';

const HeaderDiv = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  background-color: ${_Colors._blue};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const HeaderText = styled.h1`
  color: ${_Colors._light};
`;

export const HeaderStyle = {
  HeaderDiv,
  HeaderText,
};
