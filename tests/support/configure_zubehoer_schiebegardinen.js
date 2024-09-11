import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

let scrollToBottom = require("scroll-to-bottomjs");

export async function configure_zubehoer_schiebegardinen(page) {

  //load zubehör page
  await ignoreFreshChat(page);
  await page.goto('/schiebegardine-magnetclip', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);
  await page.evaluate(scrollToBottom);
  await checkButtonAvailability(page);
  await ignoreMenuContainer(page);
  await ignoreYoutube(page);


  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('6');

  //add to cart
  await page.locator('.cart-container > button').click();
}