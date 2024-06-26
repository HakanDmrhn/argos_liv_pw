import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - simulated mobile testing on schiebegardinen category page', function () {

    test('mobile testing on schiebegardinen category page', async function ({ page }) {

        // iphone-6
        // await page.setViewportSize('iphone-6');
        await page.setViewportSize({ width: 375, height: 667 });

        // load category page
        await page.goto('/schiebegardinen/schiebegardinen-beige');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - /schiebegardinen/schiebegardinen-beige');


        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Schiebegardine Ukko 7330 ------------------------//

        // activate tooltip of Schiebegardine Ukko 7330
        await page.locator('img[alt="Schiebegardine Ukko 7330"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Schiebegardine Ukko 7330"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - active tooltip - Schiebegardine Ukko 7330', { fullPage: false });

        // deactivate tooltip of Schiebegardine Ukko 7330
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - tooltip closed - Schiebegardine Ukko 7330', { fullPage: false });




        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Schiebegardine Bonito 7336 ---------------------//


        // activate tooltip of Schiebegardine Bonito 7336
        await page.locator('img[alt="Schiebegardine Bonito 7336"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Schiebegardine Bonito 7336"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - active tooltip - Schiebegardine Bonito 7336', { fullPage: false });

        // deactivate tooltip of Schiebegardine Bonito 7336
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - tooltip closed - Schiebegardine Bonito 7336', { fullPage: false });





        //-------------------------------- TOOLTIP ---------------------------------------//
        //------------------------------ Schiebegardine Naru 7297 -----------------------//


        // activate tooltip of Schiebegardine Naru 7297
        await page.locator('img[alt="Schiebegardine Naru 7297"]').scrollIntoViewIfNeeded();
        await page.locator('img[alt="Schiebegardine Naru 7297"]').click();

        // wait till all 5 mini tooltip images are present
        await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5);

        // iterate through all tooltip images and check if visible
        for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
            await element.waitFor()
        }

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - active tooltip - Schiebegardine Naru 7297', { fullPage: false });

        // deactivate tooltip of Schiebegardine Naru 7297
        await page.locator('div.tooltip.active').click();

        // take argos screenshot
        await argosScreenshot(page, 'mobile view schiebegardinen - tooltip closed - Schiebegardine Naru 7297', { fullPage: false });
    });
});
