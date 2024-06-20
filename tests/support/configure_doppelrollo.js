import {add2Cart} from "./checkout"


export async function configure_doppelrollo(page) {

    //load configurator
    await page.goto('/doppelrollo/rayure-5014');
    await page.getByText(/Doppelrollo auf Maß konfigurieren/).first().click();


    //select rollo type
    await page.getByText(/Doppelrollo mit Kassette/).first().waitFor() // this is needed since code runs too fast here
    await page.getByText(/Doppelrollo mit Kassette/).first().click();

    //input height and weight
    await page.locator('#hoehe input').fill('1500');
    await page.locator('#breite input').fill('1000');

    // input quantity 
    await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

    //add to cart
    await add2Cart(page);
  }