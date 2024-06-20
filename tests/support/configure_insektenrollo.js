export async function configure_insektenrollo(page) {


  //load configurator
  await page.goto('/insektenschutz/insektenschutz-rollo');

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