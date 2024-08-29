import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

export async function configure_fliegengitter(page) {

  //load configurator
  await page.goto('/insektenschutz/fliegengitter', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);
  // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
  const lastlink = page.getByRole('link', { name: 'Impressum' });
  await expect(lastlink).toBeVisible();
  await expect(lastlink).toBeEnabled();

  //change color
  await page.getByText(/Goldeiche/).first().waitFor() // this is needed since code runs too fast here
  await page.getByText(/Goldeiche/).first().click();

  //input height and weight
  await page.locator('#options_height').fill('2000');
  await page.locator('#options_width').fill('900');

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('2');

  //go to cart
  await page.locator('.cart-container > button').click();
}