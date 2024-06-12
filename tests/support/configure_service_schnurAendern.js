const data =
{
    "bestellnummer": "200000002",
    "breite": "800",
    "hoehe": "1200",
    "wunschlaenge": "1800",
    "produkt": "Cadena 2278"
};

export async function configure_service_aenderungSchnur(page) {

    //load service page
    await page.goto('/aenderungsauftrag-schnurlaenge');

    // input of data
    await page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(data.bestellnummer);
    await page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(data.produkt);
    await page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(data.breite);
    await page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(data.hoehe);
    await page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(data.wunschlaenge);

    // input quantity 
    await page.locator('#qty').clear(); await page.locator('#qty').fill('3');

    //add to cart
    await page.locator('.cart-container > button').click();
}