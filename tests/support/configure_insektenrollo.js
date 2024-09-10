import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

let scrollToBottom = require("scroll-to-bottomjs");

export async function configure_insektenrollo(page) {

  //load configurator
  await ignoreFreshChat(page);
  await page.goto('/insektenschutz/insektenschutz-rollo', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);
  await page.evaluate(scrollToBottom);
  await checkButtonAvailability(page);
  await ignoreMenuContainer(page);
  await ignoreYoutube(page);


  // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
  const lastlink = page.getByRole('link', { name: 'Impressum' });
  await expect(lastlink).toBeVisible();
  await expect(lastlink).toBeEnabled();

  //change color
  await page.getByText(/Eiche/).first().waitFor() // this is needed since code runs too fast here
  await page.getByText(/Eiche/).first().click();

  //input height and weight
  await page.locator('#options_height').fill('2050');
  await page.locator('#options_width').fill('1400');

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('2');

  //go to cart
  await page.locator('.cart-container > button').click();
}