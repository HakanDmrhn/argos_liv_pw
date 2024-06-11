import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreMenuContainer, ignoreFreshChat } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - jalousie configurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/jalousie/holz-jalousie-konfigurator');
    });

    test('Holzjalousie - 25mm', async function ({ page }) {

        // ******************* Holzjalousie 25mm *******************
        await page.locator('.blinds-type > ul > :nth-child(1)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 25mm', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 25mm - Kugelkette - Kunststoff *******************
        await page.locator('div[options-property="bedienung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 25mm - Kugelkette - Kunststoff', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 25mm - Kugelkette - Metall *******************
        await page.locator('div[options-property="bedienung"] > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 25mm - Kugelkette - Metall', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        await page.locator('div[options-property="befestigung"] > ul').locator(":scope > *").getByText(/In der Fensternische/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 25mm - In der Fensternische', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 25mm - In der Fensternische *******************
        await page.locator('div[options-property="befestigung"] > ul').locator(":scope > *").getByText(/An der Mauer oder Decke/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 25mm - An der Mauer oder Decke', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

    });

    test('Holzjalousie - 50mm', async function ({ page }) {

        // ******************* Holzjalousie - 50mm *******************
        await page.locator('.blinds-type > ul > :nth-child(2)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie - 50mm', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });



        // ******************* Holzjalousie - 50mm - Kugelkette - Metall *******************
        await page.locator('div[options-property="bedienung"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 50mm - Kugelkette - Metall', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 50mm - Leiterband *******************
        await page.locator('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 50mm - Leiterband', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

    });

    test('Holzjalousie - 70mm', async function ({ page }) {

        // ******************* Holzjalousie 70mm *******************
        await page.locator('.blinds-type > ul > :nth-child(3)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie - 70mm', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Holzjalousie 70mm - Leiterband *******************
        await page.locator('div[options-property="lamellenverbindung"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Holzjalousie 70mm - Leiterband', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
