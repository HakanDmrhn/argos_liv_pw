import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';

export async function configure_schiebegardine(page) {

    //load configurator
    await page.goto('/schiebegardinen/salomo-7346', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();
    await page.getByText(/Schiebegardine auf Maß konfigurieren/).first().click();


    //input height and weight
    await page.locator('#hoehe_in_mm input').fill('2800');
    await page.locator('#breite_in_mm input').fill('1000');

    // input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');

    //add to cart
    await add2Cart(page);
}