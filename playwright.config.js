const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://amazon-vee.netlify.app',
    headless: false,
    screenshot: 'on',
    video: 'on',
    trace: 'on'
  }
});
