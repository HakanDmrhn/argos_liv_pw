import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreMenuContainer } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - gallery images Jalousie-Konfigurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/jalousie/jalousie-konfigurator');
    });

    test('argos snapshots of product picture galleries - jalousie 16 mm', async function ({ page }) {

        // ******************* Jalousie 16mm *******************
        await page.locator('.blinds-type > ul > :nth-child(1)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // scroll the big image into view
        await page.locator('img#bigImage').scrollIntoViewIfNeeded();

        await page.locator('dd:nth-of-type(2) li:nth-of-type(1) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '1st image of Jalousie-Konfigurator gallery 16 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(2) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd image of Jalousie-Konfigurator gallery 16 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(3) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd image of Jalousie-Konfigurator gallery 16 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(4) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '4th image of Jalousie-Konfigurator gallery 16 mm', {
            fullPage: false
        });
    });   

    test('argos snapshots of product picture galleries - jalousie 25 mm', async function ({ page }) {

        // ******************* Jalousie 25mm *******************
        await page.locator('.blinds-type > ul > :nth-child(2)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // scroll the big image into view
        await page.locator('img#bigImage').scrollIntoViewIfNeeded();

        await page.locator('dd:nth-of-type(2) li:nth-of-type(1) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '1st image of Jalousie-Konfigurator gallery 25 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(2) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd image of Jalousie-Konfigurator gallery 25 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(3) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd image of Jalousie-Konfigurator gallery 25 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(4) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '4th image of Jalousie-Konfigurator gallery 25 mm', {
            fullPage: false
        });
    });  

    test('argos snapshots of product picture galleries - jalousie 50 mm', async function ({ page }) {

        // ******************* Jalousie 50mm *******************
        await page.locator('.blinds-type > ul > :nth-child(3)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // scroll the big image into view
        await page.locator('img#bigImage').scrollIntoViewIfNeeded();

        await page.locator('dd:nth-of-type(2) li:nth-of-type(1) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '1st image of Jalousie-Konfigurator gallery 50 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(2) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd image of Jalousie-Konfigurator gallery 50 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(3) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd image of Jalousie-Konfigurator gallery 50 mm', {
            fullPage: false
        });

        await page.locator('dd:nth-of-type(2) li:nth-of-type(4) > img').click();
        // take argos screenshot
        await argosScreenshot(page, '4th image of Jalousie-Konfigurator gallery 50 mm', {
            fullPage: false
        });
    });  
});
