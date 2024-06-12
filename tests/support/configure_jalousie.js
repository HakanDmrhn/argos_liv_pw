import {add2Cart} from "./checkout"

export async function configure_jalousie(page) {

    //load configurator
    await page.goto('/jalousie/jalousie-konfigurator?lamellengroesse=16mm');

    //input height and weight
    await page.locator('#hoehe_in_mm input').fill('1800');
    await page.locator('#breite_in_mm input').fill('1400');

    // input quantity 
    await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

     //add to cart
     await add2Cart(page);
  }