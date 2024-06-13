import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
var data = require("../../fixtures/product_pages_kissenhuellen.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - Kissenhüllen product pages', function () {

    pages.forEach(function (link) {

        test('Load page: ' + link + ' & take argos snapshot', async function ({ page }) {

            await page.goto(link);
            await page.evaluate(scrollToBottom);
            await ignoreFreshChat(page);
            await ignoreYoutube(page)

            await page.getByText(/40x40cm/).first().click();
            await page.getByText(/50x50cm/).first().click();

            // take argos screenshot
            await argosScreenshot(page, 'Kissenhüllen - ' + link, {
                viewports: [
                    "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                    "iphone-6" // Use device preset for iphone-6 --> 375x667
                ]
            });
        });
    });
});
