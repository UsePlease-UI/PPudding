import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path, { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

const pkg = JSON.parse(
  fs.readFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)), 'package.json')).toString(),
);

export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, './lib/index.ts'),
      fileName: (format) => `index.${format}.js`,
      name: 'ppudding',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss', ...Object.keys(pkg.dependencies || {})],
      output: {
        experimentalMinChunkSize: Infinity, // prevent small chunks
        globals: {
          '@heroicons/react': '@Heroicons/React',
          clsx: 'CLSX',
          dayjs: 'Dayjs',
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-remove-scroll': 'React-Remove-Scroll',
          'react/jsx-runtime': 'React/JSX-Runtime',
          'tailwind-merge': 'Tailwind-Merge',
          tailwindcss: 'Tailwindcss',
          uuid: 'UUID',
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  plugins: [
    react(),
    dts({
      exclude: ['stories/**', 'lib/hooks', 'lib/utils'],
      insertTypesEntry: true,
      tsconfigPath: './tsconfig.app.json',
    }),
    tsconfigPaths(),
  ],
});
