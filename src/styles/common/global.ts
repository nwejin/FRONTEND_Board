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

    color: ${_Colors._dark};
    font-family: 'Pretendard';
}

body {
    background-color: ${_Colors._white};
    height: 100%;
    overflow: hidden;
}

.material-symbols-outlined {
        font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 18;
      }
`;

export default Global;
