import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on raffrollo category pages', function () {

    test('hover on raffrollo category page', async function ({ page }) {

        // load category page
        await page.goto('/raffrollo/raffrollo-beige');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Raffrollo Zadar 9021 -----------------------//

        // activate tooltip of Raffrollo Zadar 9021
        await page.locator('img[alt="Zadar 9021"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Zadar 9021"]').hover();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - raffrollo Zadar 9021', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Raffrollo Luogo 9107 -----------------------//

        // activate tooltip of Raffrollo Luogo 9107
        await page.locator('img[alt="Luogo 9107"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Luogo 9107"]').hover();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - raffrollo Luogo 9107', {
            fullPage: false,
            disableHover: false
        });
    });
});