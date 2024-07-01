export async function configure_zubehoer_rollo(page) {

    //load zubehör page
    await page.goto('/bedienstab-rollo-dachfenster');
    await page.waitForLoadState('load', { timeout: 10000 }); // wait until the page loads


    // Warte auf die Antwort für js-Dateien und überprüfe den Statuscode 200
    // sonst entsteht JS-Error: opConfig not defined
    await Promise.all([
        page.waitForResponse(response =>
            response.url().includes('/skin/frontend/delphinus/default/js_minify/')
            && response.status() === 200, { timeout: 3000 })
    ]);

    // promise not sufficient here!
    // workaround
    // await this.page.waitForTimeout(2000);

    //select size
    const Bedienstab = page.locator('.last select');
    await Bedienstab.toBeVisible();
    await Bedienstab.toBeEnabled();
    await Bedienstab.selectOption({ label: '100 cm' });

    // input quantity 
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('1');

    await page.locator('.cart-container > button').click();
}