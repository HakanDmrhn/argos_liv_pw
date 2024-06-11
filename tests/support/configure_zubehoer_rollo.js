module.exports = {

    configure_zubehoer_rollo: async function configure_zubehoer_rollo() {

        //load zubehör page
        await page.goto('/bedienstab-rollo-dachfenster');
        await page.FIXME_wait('@js_minify');
        await page.waitForTimeout(1000);

        //select size
        await page.getByText(/Länge wählen/).first().FIXME_siblings('select').selectOption({ label: '100 cm' });

        // input quantity 
        await page.locator('#qty').clear();
        await page.locator('#qty').fill('1');
        
        await page.locator('.cart-container > button').click({ force: true });
    }
};