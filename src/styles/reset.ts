import { css } from '@emotion/react';

const reset = css`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html,
    body,
    #root {
        min-height: 100%;
    }

    html {
        width: 100%;
    }

    body {
        font-family:
            'Pretendard Variable',
            Pretendard,
            -apple-system,
            BlinkMacSystemFont,
            system-ui,
            Roboto,
            'Helvetica Neue',
            'Segoe UI',
            'Apple SD Gothic Neo',
            'Noto Sans KR',
            'Malgun Gothic',
            'Apple Color Emoji',
            'Segoe UI Emoji',
            'Segoe UI Symbol',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
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

    main {
        -ms-overflow-style: none; /* 익스플로러, 앳지 */
        scrollbar-width: none; /* 파이어폭스 */
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default reset;
