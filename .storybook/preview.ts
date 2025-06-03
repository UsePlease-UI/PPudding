import { withThemeByClassName } from '@storybook/addon-themes';

// tailwind css file
import '../lib/index.css';

import type { Preview } from '@storybook/react-vite';

export const decorators = [
  withThemeByClassName({
    defaultTheme: 'light',
    themes: {
      dark: 'dark',
      light: 'light',
    },
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        includeNames: true,
        method: 'alphabetical',
        order: ['Introduction', 'Pages'],
      },
    },
  },
};

export default preview;
