import { defineConfig } from 'cypress';
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
  },
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
      webpackConfig: {
        resolve: {
          alias: {
            '@components': path.resolve(__dirname, './src/components'),
          },
        },
      },
    },
    video: false,
  },
});