module.exports = {

    configure_zubehoer_plissee: async function configure_zubehoer_plissee() {

        //load zubehör page
        await page.goto('/sockelplatten');

        await page.FIXME_wait('@js_minify');
        await page.waitForTimeout(1000);

        //change color
        await page.locator('.input-box select').selectOption({ label: 'weiß' });

        // input quantity 
        await page.locator('#qty').clear();
        await page.locator('#qty').fill('4');

        //add to cart
        await page.locator('.cart-container > button').click({ force: true });
    }
};