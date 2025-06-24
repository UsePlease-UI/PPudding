// tailwind css file
import '../lib/index.css';

import { AlertProvider } from '../lib/components/useAlert';

import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  decorators: [
    (Story) => (
      <AlertProvider position="bottom-right">
        <Story />
      </AlertProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      showToolbar: false,
      storySort: {
        includeNames: true,
        method: 'alphabetical',
        order: ['Introduction', 'Pages'],
      },
    },
  },
};

export default preview;
