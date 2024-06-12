import { add2Cart } from "./checkout"

export async function configure_raffrollo(page) {

  //load configurator
  await page.goto('/raffrollo/yuna-9260');
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