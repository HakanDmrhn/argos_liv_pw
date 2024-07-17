export async function configure_zubehoer_vorhang(page) {

  //load zubehör page
  await page.goto('/gardinenstangen/zylinder2', { waitUntil: 'load' });
  await page.waitForFunction(() => document.fonts.ready);

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('2');

  //go to cart
  await page.locator('.cart-container > button').click();
}