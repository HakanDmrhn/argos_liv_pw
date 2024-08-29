import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

let scrollToBottom = require("scroll-to-bottomjs");

export async function configure_holzjalousie(page) {

    //load configurator
    await page.goto('/jalousie/holz-jalousie-konfigurator?lamellengroesse=50mm', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();

    //change lamellen color
    await page.getByText(/Natural Mahagoni 6523/).first().waitFor() // this is needed since code runs too fast here
    await page.getByText(/Natural Mahagoni 6523/).first().click();

    //input height and weight
    await page.locator('#hoehe_in_mm input').fill('1650');
    await page.locator('#breite_in_mm input').fill('1200');

    // input quantity 
    await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

    //add to cart
    await add2Cart(page);
}