import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - simulated mobile testing on doppelrollo category page', function () {

    test('mobile testing on doppelrollo category page', async function ({ page }) {

        // iphone-6
        // await page.setViewportSize('iphone-6');
        await page.setViewportSize({ width: 375, height: 667 });

        // load category page
        await page.goto('/doppelrollo/alle-doppelrollos');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo- /doppelrollo/alle-doppelrollos');


        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ RAYURE 5001 ------------------------------------//

        // activate tooltip of Rayure 5001
        await page.locator('img[alt="Rayure 5001"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Rayure 5001"]').click();

        // wait till all 4 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4);

        // iterate through all gallery images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - active tooltip - Rayure 5001', { fullPage: false });

        // deactivate tooltip of Rayure 5001
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - tooltip closed - Rayure 5001', { fullPage: false });




        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ JUSTE 5104 --------------------------------------//


        // activate tooltip of Juste 5104
        await page.locator('img[alt="Juste 5104"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Juste 5104"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - active tooltip - Juste 5104', { fullPage: false });

        // deactivate tooltip of Juste 5104
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - tooltip closed - Juste 5104', { fullPage: false });





        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ AMELIO 5105 --------------------------------------//


        // activate tooltip of Amelio 5105
        await page.locator('img[alt="Amelio 5105"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Amelio 5105"]').click();

        // wait till all 3 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(3);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - active tooltip - Amelio 5105', { fullPage: false });

        // deactivate tooltip of Amelio 5105
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view doppelrollo - tooltip closed - Amelio 5105', { fullPage: false });
    });
});
