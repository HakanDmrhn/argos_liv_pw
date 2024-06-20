import { add2Cart } from "./checkout"

export async function configure_vorhang(page) {

    //load configurator
    await page.goto('/vorhaenge/dekoschal/bovino');

    //change color
    await page.locator('.color-title').getByText(/Rot/).first().waitFor() // this is needed since code runs too fast here
    await page.locator('.color-title').getByText(/Rot/).first().click();

    //input height and weight
    await page.locator('#breite input').fill('200');
    await page.locator('#hoehe input').fill('280');

    // input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('2');

    //add to cart
    await add2Cart(page);
}