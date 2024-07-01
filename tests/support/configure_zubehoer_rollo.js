import { expect } from '@playwright/test';

export async function configure_zubehoer_rollo(page) {
    // Load Zubehör page
    await page.goto('/bedienstab-rollo-dachfenster');

    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();

    // Wait for the page to fully load
    //await page.waitForLoadState('load', { timeout: 10000 });

    // Wait for the response for JS files and check for status code 200
    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/skin/frontend/delphinus/default/js_minify/') &&
            response.status() === 200, { timeout: 10000 }) // increased timeout to 10 seconds
    ]);

    // Select size
    await page.locator('.last select').selectOption({ label: '100 cm' });

    // Input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('1');

    // Click the add to cart button
    await page.locator('.cart-container > button').click();
}
