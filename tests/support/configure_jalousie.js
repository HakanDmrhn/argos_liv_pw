import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';


export async function configure_jalousie(page) {

    //load configurator
    await page.goto('/jalousie/jalousie-konfigurator?lamellengroesse=16mm', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' });
    await expect(lastlink).toBeVisible();
    await expect(lastlink).toBeEnabled();

    //input height and weight
    await page.locator('#hoehe_in_mm input').fill('1800');
    await page.locator('#breite_in_mm input').fill('1400');

    // input quantity 
    await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

     //add to cart
     await add2Cart(page);
  }