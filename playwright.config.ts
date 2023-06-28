import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './e2e',
  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: 'test-results',
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // reporter: 'html',
  reporter: process.env.CI ? 'dot' : 'list',
  // reporter: process.env.CI ? 'dot' : ['json', { outputFile: 'test-results.json' }],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    // screenshot: 'only-on-failure',
    screenshot: 'on',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for browsers */
  projects: [
    {
      name: 'Chromium',
      use: { 
        ...devices['Desktop Chrome'], 
        viewport: { width: 1280, height: 720 } 
      },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
      // name: 'Google Chrome',
      // use: {
      //   ...devices['Desktop Chrome'],
      //   channel: 'chrome',
      //   viewport: { width: 1280, height: 720 } 
      // },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
