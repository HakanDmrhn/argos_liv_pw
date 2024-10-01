import { test as base } from '@playwright/test';

export const test = base.extend({
  page: async ({ page }, use) => {
    console.log('Setting up page fixture...');
    
    // Intercept and abort YouTube requests
  // Log and continue all network requests
    await page.route('https://www.youtube-nocookie.com/**', route => {
    console.log('YouTube video request blocked:', route.request().url())
    return route.abort();
  });

    await use(page);
    
    console.log('Page fixture setup complete.');
  },
});

export { expect } from '@playwright/test';
