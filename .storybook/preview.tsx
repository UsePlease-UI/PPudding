import React from 'react';

import { Global, css } from '@emotion/react';
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

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
        background-color: #fafafa;
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

const GlobalStyles = () => <Global styles={reset} />;

export const decorators = [
    withThemeFromJSXProvider({
        GlobalStyles // Adds your GlobalStyles component to all stories
    })
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};

export default preview;
