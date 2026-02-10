const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  outputDir: 'test-results',

  use: {
    baseURL: 'https://amazon-vee.netlify.app',
    headless: false,

    screenshot: 'on',
    video: 'on',
    trace: 'on',

    actionTimeout: 10000,
    navigationTimeout: 10000,
  },

  reporter: [['html', { open: 'never' }]],
});
