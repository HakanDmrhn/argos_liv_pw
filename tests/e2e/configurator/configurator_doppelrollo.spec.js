import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreMenuContainer, ignoreFreshChat } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - doppelrollo configurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/doppelrollo/doppelrollo-konfigurator');
        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

    });

    test('Doppelrollo Mini zum Klemmen', async function ({ page }) {

        // ******************* Doppelrollo Mini zum Klemmen *******************

        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo mini zum Klemmen', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung weiß *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/weiß/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung weiß', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung creme *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/creme/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung creme', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung braun *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/braun/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung braun', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung grau *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/grau/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung grau', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung anthrazit *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/anthrazit/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung anthrazit', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung schwarz *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/schwarz/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Verblendung schwarz', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Metallkette *******************
        await page.locator('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Metallkette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Bedienseite rechts *******************
        await page.locator('div[options-property="bedienseite"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mini - Bedienseite rechts', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

    });

    test('Doppelrollo Mini mit Kassette zum Kleben', async function ({ page }) {

        // ******************* Doppelrollo Mini mit Kassette zum Kleben *******************
        await page.locator('#type-selector-top > ul > :nth-child(2)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page)

        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo mini mit Kassette zum Kleben', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });

    test('Doppelrollo ohne Kassette', async function ({ page }) {

        // ******************* Doppelrollo ohne Kassette *******************
        await page.locator('#type-selector-top > ul > :nth-child(3)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page)

        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo ohne Kassette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Doppelrollo Verblendung weiß *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/weiß/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung weiß', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Doppelrollo Verblendung creme *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/creme/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung creme', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung braun *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/braun/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung braun', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung grau *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/grau/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung grau', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung anthrazit *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/anthrazit/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung anthrazit', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Verblendung schwarz *******************
        await page.locator('div[options-property="verblendungsfarbe"] > ul').locator(":scope > *").getByText(/schwarz/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Verblendung schwarz', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo oK Metallkette *******************
        await page.locator('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Metallkette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Doppelrollo Kugelkette rechts *******************
        await page.locator('div[options-property="bedienseite"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - oK - Kugelkette rechts', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });

    test('Doppelrollo mit Kassette', async function ({ page }) {

        // ******************* Doppelrollo mit Kassette *******************
        await page.locator('#type-selector-top > ul > :nth-child(4)').click();

        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page)

        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mit Kassette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette weiß *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/weiß/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette weiß', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette creme *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/creme/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette creme', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette silber *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/silber/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette silber', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette grau *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/grau/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette grau', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette anthrazit *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/anthrazit/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette anthrazit', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo Kassette schwarz *******************
        await page.locator('div[options-property="kassettenfarbe"] > ul').locator(":scope > *").getByText(/schwarz/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kassette schwarz', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Doppelrollo mK Metallkette *******************
        await page.locator('div[options-property="bedienungMaterial"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Metallkette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Doppelrollo Kugelkette rechts*******************
        await page.locator('div[options-property="bedienseite"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo - mK - Kugelkette rechts', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
