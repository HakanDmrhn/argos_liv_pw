import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';

export async function configure_vorhang(page) {

    //load configurator
    await page.goto('/vorhaenge/dekoschal/bovino', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();

    //change color
    await page.locator('.color-title').getByText(/Rot/).first().waitFor() // this is needed since code runs too fast here
    await page.locator('.color-title').getByText(/Rot/).first().click();

    //input height and weight
    await page.locator('#breite input').fill('200');
    await page.locator('#hoehe input').fill('280');

    // input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');

    //add to cart
    await add2Cart(page);
}