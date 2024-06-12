import { add2Cart } from "./checkout"

export async function configure_plissee(page) {

  //load configurator
  await page.goto('/plissee/lindura-1583');
  await page.getByText(/Plissee auf Maß konfigurieren/).first().click();


  //input height and weight
  await page.locator('#hoehe input').fill('1500');
  await page.locator('#breite input').fill('1500');

  // input quantity 
  await page.locator('#configurator-price-cart > .add-to-cart input').clear();
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

  //add to cart
  await add2Cart(page);
}