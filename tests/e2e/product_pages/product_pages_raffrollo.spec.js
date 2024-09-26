import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';
var data = require("../../fixtures/product_pages_raffrollo.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - Raffrollo product pages', function () {

    pages.forEach(function (link) {

        test('Load page: ' + link + ' & take argos snapshot', async function ({ page }) {

            await ignoreFreshChat(page);
            await ignoreYoutube(page);
            await page.goto(link, { waitUntil: 'load' });
            await page.waitForFunction(() => document.fonts.ready);
            await page.evaluate(scrollToBottom);
            await checkButtonAvailability(page);
            await ignoreMenuContainer(page);

            // ensure that the page has fully loaded by waiting for the logo c
            const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' });
            await expect(livoneoLogo).toBeVisible();
            await livoneoLogo.hover();
            await page.mouse.move(0, 0);


            // take argos screenshot
            await argosScreenshot(page, link, {
                viewports: [
                    "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                    "iphone-6" // Use device preset for iphone-6 --> 375x667
                ]
            });
        });
    });
});
