const data =
{
    "produkt": "Broza 1889",
    "bestellnummer": "200000002",
    "schienenfarbe": "weiß",
    "breite": "1500",
    "hoehe": "1800",
    "wunschlaenge": "2300",
    "wunschseite": "beidseitig",
    "anmerkung": "Bitte die Schnur in angegebener Länge ändern. Lieben Dank! Meier"
};

export async function configure_service_laengereSchnur(page) {

    //load service page
    await page.goto('/zusatzauftrag-laengere-fuehrungsschnuere');

    // input of data
    await page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(data.produkt);
    await page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(data.schienenfarbe);
    await page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(data.breite);
    await page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(data.hoehe);
    await page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(data.wunschlaenge);
    await page.selectOption(('#configurator-options > dl > :nth-child(16) > .input-box > select'), data.wunschseite)
    await page.locator("#configurator-options > dl > .last > .input-box > textarea").fill(data.anmerkung);

    // input quantity 
    await page.locator('#qty').clear(); await page.locator('#qty').fill('3');

    //add to cart
    await page.locator('.cart-container > button').click();
}