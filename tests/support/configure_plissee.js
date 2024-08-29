import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

export async function configure_plissee(page) {

  //load configurator
  await page.goto('/plissee/lindura-1583', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);
  // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
  const lastlink = page.getByRole('link', { name: 'Impressum' });
  await expect(lastlink).toBeVisible();
  await expect(lastlink).toBeEnabled();

  await page.getByText(/Plissee auf Maß konfigurieren/).first().click();


  //input height and weight
  await page.locator('#hoehe input').fill('1500');
  await page.locator('#breite input').fill('1500');

  // input quantity 
  await page.locator('#configurator-price-cart > .add-to-cart input').clear();
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

  //add to cart
  await add2Cart(page);
}