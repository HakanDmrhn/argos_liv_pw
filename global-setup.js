// global-setup.js
const { chromium } = require('playwright');

module.exports = async (config) => {
  const browser = await chromium.launch();
  
  // Create a context and block YouTube requests globally
  const context = await browser.newContext();

  await context.route('**youtube**', (route) => {
    route.abort(); // Block YouTube requests
  });

  global.browser = browser;
  global.browserContext = context;
};

// global-teardown.js (ensure the browser is closed after tests)
module.exports = async () => {
  await global.browserContext.close();
  await global.browser.close();
};
