
export async function configure_fliegengitter(page) {

  //load configurator
  await page.goto('/insektenschutz/fliegengitter');

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