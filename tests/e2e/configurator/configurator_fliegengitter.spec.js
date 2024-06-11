import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - Fliegengitter configurator', function () {


    test('Fliegengitter', async function ({ page }) {

        // ******************* Fliegengitter - Farbe Weiß *******************
        await page.goto("/insektenschutz/fliegengitter");
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Weiß', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Anthrazit *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Anthrazit/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Anthrazit', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Braun *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Braun/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Braun', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Mooreiche *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Mooreiche/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Mooreiche', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Walnuss *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Walnuss/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Walnuss', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Goldeiche *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Goldeiche/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Goldeiche', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Fliegengitter - Farbe Winchester *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Winchester/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Fliegengitter - Farbe Winchester', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
