import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - simulated mobile testing on rollo category page', function () {

    test('mobile testing on rollo category page', async function ({ page }) {

        // iphone-6
        // await page.setViewportSize('iphone-6');
        await page.setViewportSize({ width: 375, height: 667 });

        // load category page
        await page.goto('/rollo/rollo-gruen');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - /rollo/rollo-gruen');


        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Basic DimOut 3040 ------------------------------------//

        // activate tooltip of Basic DimOut 3040
        await page.locator('img[alt="Basic DimOut 3040"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Basic DimOut 3040"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - active tooltip - Basic DimOut 3040', { fullPage: false });

        // deactivate tooltip of Basic DimOut 3040
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - tooltip closed - Basic DimOut 3040', { fullPage: false });




        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Basic Dimout 3686 --------------------------------------//


        // activate tooltip of Basic Dimout 3686
        await page.locator('img[alt="Basic Dimout 3686"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Basic Dimout 3686"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - active tooltip - Basic Dimout 3686', { fullPage: false });

        // deactivate tooltip of Basic Dimout 3686
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - tooltip closed - Basic Dimout 3686', { fullPage: false });





        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Levigo 3734 --------------------------------------//


        // activate tooltip of Levigo 3734
        await page.locator('img[alt="Levigo 3734"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Levigo 3734"]').click();

        // wait till all 8 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - active tooltip - Levigo 3734', { fullPage: false });

        // deactivate tooltip of Levigo 3734
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view rollo - tooltip closed - Levigo 3734', { fullPage: false });
    });
});
