import {add2Cart} from "./checkout"

module.exports = {

    configure_schiebegardine: async function configure_schiebegardine() {

        //load configurator
        await page.goto('/schiebegardinen/salomo-7346');
        await page.getByText(/Schiebegardine auf Maß konfigurieren/).first().click();


        //input height and weight
        await page.locator('#hoehe_in_mm input').fill('2800');
        await page.locator(
            '#breite_in_mm input').fill('1000');

        // input quantity 
        await page.locator('#qty').clear();
        await page.locator('#qty').fill('2');

        //add to cart
        checkOut.add2Cart();
    }
};