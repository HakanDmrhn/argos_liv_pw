export async function configure_zubehoer_schiebegardinen(page) {

  //load zubehör page
  await page.goto('/schiebegardine-magnetclip', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('6');

  //add to cart
  await page.locator('.cart-container > button').click();
}