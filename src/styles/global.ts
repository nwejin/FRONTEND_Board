import { createGlobalStyle } from 'styled-components';
import _Colors from './color';

const Global = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
* {
    margin: 0px;
    padding: 0px;

    box-sizing: border-box;

    text-decoration: none;
    list-style: none;

    color: ${_Colors._Gray_0};
    font-family: 'Pretendard';
}

body {
    background-color: ${_Colors._white};
    background-size: 100%;
    height: 100%;
    overflow: hidden;
}
`;

export default Global;
