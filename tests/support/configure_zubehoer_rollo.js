import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';

import { expect } from '@playwright/test';

export async function configure_zubehoer_rollo(page) {
    // Load Zubehör page
    await page.goto('/bedienstab-rollo-dachfenster', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    
   // ensure that the page has fully loaded by waiting for one of the last elements in network traffick 
    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();

    // Select size
    await page.locator('.last select').selectOption({ label: '100 cm' });

    // Input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('1');

    // Click the add to cart button
    await page.locator('.cart-container > button').click();
}
