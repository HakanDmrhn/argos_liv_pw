import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - image popups Plissee-Konfigurator', function () {

    test('argos snapshots of plissee gallery images - PDP', async function ({ page }) {

        await page.goto('/plissee/basis-object-1504', { waitUntil: 'load' });
        await page.waitForFunction(() => document.fonts.ready);
        await page.evaluate(scrollToBottom);
        await checkButtonAvailability(page);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator('#big-img').waitFor();
        await page.locator('#big-img').click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '4th popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '5th popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '6th popup image of basis-object-1504', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '7th popup image of basis-object-1504', {
            fullPage: false
        });
    });

    test('argos snapshots of plissee picture galleries - Konfigurator', async function ({ page }) {

        await page.goto('/plissee/plissee-konfigurator');
        await page.waitForFunction(() => document.fonts.ready);
        await page.evaluate(scrollToBottom);
        await checkButtonAvailability(page);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        // scroll the big image into view
        await page.locator('div.box').scrollIntoViewIfNeeded();

        await page.locator('.images a').first().click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();

        // take argos screenshot
        await argosScreenshot(page, '1st popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '4th popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '5th popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '6th popup image of Plissee-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '7th popup image of Plissee-Konfigurator', {
            fullPage: false
        });
    });
});
