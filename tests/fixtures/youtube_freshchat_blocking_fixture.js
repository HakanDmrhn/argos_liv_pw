import { test as base } from '@playwright/test';

/**
 * Custom test fixture that extends the base Playwright test.
 * https://playwright.dev/docs/test-fixtures#test-fixtures
 * This fixture sets up the page with specific network request interception.
 * It blocks requests to YouTube videos to prevent them from loading during tests.
 *
 * @function
 * @param {Object} context - The context object provided by Playwright.
 * @param {import('playwright').Page} context.page - The Playwright Page object.
 * @param {function} use - A function to invoke the next fixture in the chain.
 * @returns {Promise<void>} A promise that resolves when the page setup is complete.
 */
export const test = base.extend({
  /**
   * The page fixture setup for blocking YouTube video requests.
   *
   * @async
   * @param {Object} options - The fixture options.
   * @param {import('playwright').Page} options.page - The Playwright Page object.
   * @param {function} use - A function to use the page fixture.
   */
  page: async ({ page }, use) => {
    console.log('Setting up page fixture...');

    // Intercept and abort YouTube requests
    await page.route('https://www.youtube-nocookie.com/**', route => { 
      console.log('YouTube video request blocked:', route.request().url());
      return route.abort();
    });
    
    // Intercept and abort Freshchat requests
    await page.route('**/wchat.eu.freshchat.com/js/widget.js', route => {
      console.log('FreshChat widget request blocked:', route.request().url());
      return route.abort();
    });
    

    await use(page);

    console.log('Page fixture setup complete.');
  },
});

// Re-export the expect function for assertions
export { expect } from '@playwright/test';
