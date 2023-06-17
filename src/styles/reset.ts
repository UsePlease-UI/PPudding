import { css } from '@emotion/react';

const reset = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        width: 100%;
    }

    html,
    body,
    #root {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
            'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 14px;
        line-height: 1.5;
        color: #000000;
        background-color: #145cb1;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }

    input {
        outline: none;
    }

    input:-webkit-autofill {
        transition-delay: 9999s;
        transition-property: background-color, color;
    }

    a {
        text-decoration: none;
    }

    button {
        border: 0;
        outline: 0;
        background-color: transparent;
        cursor: pointer;
    }

    button:disabled {
        pointer-events: none;
    }

    ul,
    menu {
        list-style-type: none;
    }

    p,
    span {
        word-break: break-all;
    }
`;

export default reset;
