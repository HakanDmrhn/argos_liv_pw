import { add2Cart } from "./checkout"

export async function configure_kissenhuelle(page) {

  //load configurator
  await page.goto('/kissenhuelle/bosco');

  //change color
  await page.getByText(/Lavendel/).first().click();

  //select size
  await page.getByText(/Stück 50x50cm/).first().click();

  // input quantity 
  await page.locator('#qty').clear();
  await page.locator('#qty').fill('2');

  //add to cart
  await add2Cart(page);
}