import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on plissee category pages', function () {

    test('hover on plissee category page', async function ({ page }) {

        // load category page
        await page.goto('/plissee/plissee-gelb');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Plissee Color Breeze 1740 -----------------------//

        // activate tooltip of Color Breeze 1740
        await page.locator('img[alt="Color Breeze 1740"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Color Breeze 1740"]').hover();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Plissee Color Breeze 1740', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ PLISSEE Cielo Perl 1904 -----------------------//

        // activate tooltip of Cielo Perl 1904
        await page.locator('img[alt="Cielo Perl 1904"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Cielo Perl 1904"]').hover();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Plissee Cielo Perl 1904', {
            fullPage: false,
            disableHover: false
        });
    });
});
