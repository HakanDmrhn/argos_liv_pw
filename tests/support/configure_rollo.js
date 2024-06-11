import {add2Cart} from "./checkout"

module.exports = {

  configure_rollo: async function configure_rollo() {

    //load configurator
    await page.goto('/rollo/basic-3687');
    await page.getByText(/Rollo auf Maß konfigurieren/).first().click();


    //select rollo type
    await page.getByText(/mit Kassette/).first().click();

    //input height and weight
    await page.locator('#hoehe_in_mm input').fill('2000');
    await page.locator('#breite_in_mm input').fill('1300');

    // input quantity 
    await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');

    //add to cart
    checkOut.add2Cart();
  }
};