import { add2Cart } from "./checkout"

export async function configure_rollo(page) {

  //load configurator
  await page.goto('/rollo/basic-3687');
  await page.getByText(/Rollo auf Maß konfigurieren/).first().click();


  //select rollo type
  await page.getByText(/mit Kassette/).first().waitFor() // this is needed since code runs too fast here
  await page.getByText(/mit Kassette/).first().click();

  //input height and weight
  await page.locator('#hoehe_in_mm input').fill('2000');
  await page.locator('#breite_in_mm input').fill('1300');

  // input quantity 
  await page.locator('#configurator-price-cart > .add-to-cart input').clear();
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

  //add to cart
  await add2Cart(page);
}