import { add2Cart } from "./checkout";
import { expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';

export async function configure_raffrollo(page) {

  //load configurator
  await page.goto('/raffrollo/yuna-9260', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);
  // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
  const lastlink = page.getByRole('link', { name: 'Impressum' });
  await expect(lastlink).toBeVisible();
  await expect(lastlink).toBeEnabled();
  await page.getByText(/Raffrollo auf Maß konfigurieren/).first().click();


  //input height and weight
  await page.locator('#hoehe_in_mm input').fill('250');
  await page.locator('#breite_in_mm input').fill('120');

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('2');

  //add to cart
  await add2Cart(page);
}