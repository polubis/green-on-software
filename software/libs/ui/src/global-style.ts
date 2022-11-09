import { createGlobalStyle } from 'styled-components';
import fonts from './fonts.module.css';
import { getThemeProp } from './theme';

export const GlobalStyle = createGlobalStyle`
    ${fonts}

    body {
        margin: 0;
        padding: 0;
        background: ${getThemeProp('background')};
        color: ${getThemeProp('font')};
    }    

    * {
        box-sizing: border-box;
    }

    ul,
    ol {
        padding: 0;
        margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p {
        margin: 0;
    }
`;
