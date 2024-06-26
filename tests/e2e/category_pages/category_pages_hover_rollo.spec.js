import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on rollo category pages', function () {

    test('hover on rollo category page', async function ({ page }) {

        // load category page
        await page.goto('/rollo/rollo-beige');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ ROLLO Basic DimOut 3025 -----------------------//

        // activate tooltip of Basic DimOut 3025
        await page.locator('img[alt="Basic DimOut 3025"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Basic DimOut 3025"]').hover();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Rollo Basic DimOut 3025', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ ROLLO Triangolo 3882 -----------------------//

        // activate tooltip of Triangolo 3882
        await page.locator('img[alt="Rollo Triangolo 3882"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Rollo Triangolo 3882"]').hover();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Rollo Triangolo 3882', {
            fullPage: false,
            disableHover: false
        });
    });
});
