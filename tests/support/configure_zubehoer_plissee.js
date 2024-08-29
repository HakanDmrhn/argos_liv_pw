import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

export async function configure_zubehoer_plissee(page) {

        //load zubehör page
        await page.goto('/sockelplatten', { waitUntil: 'load' });
        await page.waitForFunction(() => document.fonts.ready);

        // Warte auf die Antwort für js-Dateien und überprüfe den Statuscode 200
        // sonst entsteht JS-Error: opConfig not defined
        // await Promise.all([
        //     page.waitForResponse(response =>
        //         response.url().includes('/skin/frontend/delphinus/default/js_minify/')
        //         && response.status() === 200, { timeout: 3000 })
        // ]);

        // promise not sufficient here!
        // workaround
        await page.waitForTimeout(2000);

        //change color
        await page.locator('.input-box select').selectOption({ label: 'weiß' });

        // input quantity 
        await page.locator('#qty').clear();
        await page.locator('#qty').fill('4');

        //add to cart
        await page.locator('.cart-container > button').click();
    }