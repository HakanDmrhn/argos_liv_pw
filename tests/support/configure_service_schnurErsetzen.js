const data =
{
  "bestellnummer": "200000008",
  "breite": "1000",
  "hoehe": "1500",
  "wunschlaenge": "1500",
  "produkt": "Cadena 2280"
};

export async function configure_service_schnurErsetzen(page) {

  //load service page
  await page.goto('/reparaturauftrag-schnur-ersetzen');

  // input of data
  await page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(data.bestellnummer);
  await page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(data.produkt);
  await page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(data.breite);
  await page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(data.hoehe);
  await page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(data.wunschlaenge);

  // input quantity 
  await page.locator('#qty').clear(); await page.locator('#qty').fill('2');

  //add to cart
  await page.locator('.cart-container > button').click();
}