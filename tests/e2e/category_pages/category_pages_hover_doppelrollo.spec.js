import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on doppelrollo category pages', function () {

    test('hover on doppelrollo category page', async function ({ page }) {

        // load category page
        await page.goto('/doppelrollo/doppelrollo-grau');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ doppelrollo Acorda 5090 -----------------------//

        // activate tooltip of Acorda 5090
        await page.locator('img[alt="Acorda 5090"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Acorda 5090"]').hover();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Doppelrollo Acorda 5090', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ doppelrollo Lacinia 5053 -----------------------//

        // activate tooltip of Lacinia 5053
        await page.locator('img[alt="Lacinia 5053"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Lacinia 5053"]').hover();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Doppelrollo Lacinia 5053', {
            fullPage: false,
            disableHover: false
        });
    });
});
