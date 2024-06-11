module.exports = {

  configure_zubehoer_vorhang: async function configure_zubehoer_vorhang() {

    //load zubehör page
    await page.goto('/gardinenstangen/zylinder2');

    // input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');

    //go to cart
    await page.locator('.cart-container > button').click();
  }
};