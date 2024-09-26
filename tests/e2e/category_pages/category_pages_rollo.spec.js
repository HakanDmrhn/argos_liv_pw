import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';
const data = require("../../fixtures/cat_pages_rollo.json");
const pages = data.URLS;
const scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - Rollo category pages', () => {

    pages.forEach((link) => {

        test('Load page: ' + link + ' & take argos snapshot', async ({ page }) => {

            await ignoreFreshChat(page);
            await ignoreYoutube(page);
            await page.goto(link, { waitUntil: 'load' });
            await page.waitForFunction(() => document.fonts.ready);
            await page.evaluate(scrollToBottom);
            await checkButtonAvailability(page);
            await ignoreMenuContainer(page);

            // Ensure that the page has fully loaded by waiting for the logo 
            const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' });
            await expect(livoneoLogo).toBeVisible();
            await livoneoLogo.hover();
            await page.mouse.move(0, 0);

            // Take Argos screenshot
            await argosScreenshot(page, link, {
                viewports: [
                    "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                    "iphone-6" // Use device preset for iphone-6 --> 375 x 667
                ]
            });
        });
    });
});
