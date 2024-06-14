import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - simulated mobile testing on raffrollo category page', function () {

    test('mobile testing on raffrollo category page', async function ({ page }) {

        // iphone-6
        // await page.setViewportSize('iphone-6');
        await page.setViewportSize({ width: 375, height: 667 });

        // load category page
        await page.goto('/raffrollo/raffrollo-beige');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - /raffrollo/raffrollo-beige');


        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Zadar 9021 ------------------------------------//

        // activate tooltip of Zadar 9021
        await page.locator('img[alt="Zadar 9021"]').click();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Zadar 9021', { fullPage: false });

        // deactivate tooltip of Zadar 9021
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Zadar 9021', { fullPage: false });




        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Cocco 9010 --------------------------------------//


        // activate tooltip of Cocco 9010
        await page.locator('img[alt="Cocco 9010"]').click();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Cocco 9010', { fullPage: false });

        // deactivate tooltip of Cocco 9010
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Cocco 9010', { fullPage: false });





        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Dillio 9071 --------------------------------------//


        // activate tooltip of Dillio 9071
        await page.locator('img[alt="Dillio 9071"]').click();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Dillio 9071', { fullPage: false });

        // deactivate tooltip of Dillio 9071
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Dillio 9071', { fullPage: false });
    });
});
