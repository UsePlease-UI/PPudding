import '../src/styles/index.css'; // tailwind css file

import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-themes';

export const decorators = [
    withThemeByClassName({
        themes: {
            light: 'light',
            dark: 'dark'
        },
        defaultTheme: 'light'
    })
];

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        options: {
            storySort: {
                method: 'alphabetical',
                includeNames: true,
                order: ['Introduction', 'Pages']
            }
        }
    }
};

export default preview;
