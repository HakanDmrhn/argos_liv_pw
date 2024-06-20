import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - Insektenschutzrollo configurator', function () {


    test('Insektenschutzrollo', async function ({ page }) {

        // ******************* Insektenschutzrollo - Hauswand *******************
        await page.goto("/insektenschutz/insektenschutz-rollo");
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Montage Hauswand', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Mauer *******************
        await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Mauer', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Fensterrahmen *******************
        await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Fensterrahmen', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Klebemontage *******************
        await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Klebemontage', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });



        // ******************* Insektenschutzrollo - Farbe Anthrazit *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Anthrazit/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Farbe Anthrazit', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Farbe Braun *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Braun/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Farbe Braun', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Farbe Eiche *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Eiche/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Farbe Eiche', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Farbe Nuss *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Nuss/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Farbe Nuss', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Insektenschutzrollo - Farbe Winchester *******************
        await page.locator('#options-list-color').locator(":scope > *").getByText(/Winchester/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Insektenschutzrollo - Farbe Winchester', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
