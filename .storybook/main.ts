import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-themes',
        '@storybook/addon-a11y'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    core: {
        disableTelemetry: true // 👈 Disables telemetry
    },
    // https://github.com/aleclarson/vite-tsconfig-paths/issues/65#issuecomment-1221271942
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()]
        });
    }
};
export default config;
