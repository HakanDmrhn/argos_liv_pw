import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat, ignoreMenuContainer } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - schiebegardinen configurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/schiebegardinen/schiebegardinen-konfigurator');
        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

    });

    test('Schiebegardine GS: einzelne Paneele', async function ({ page }) {

        // ******************* Schiebegardine GS: einzelne Paneele *******************

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Einzelpaneel mit PW *******************
        await page.locator('div[options-property="paneelwagen"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel - mit Paneelwagen', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Einzelpaneel mit PW silber *******************
        await page.locator('div[options-property="farbeEndstabPaneelwagen"] > ul > :nth-child(2)').click()
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel - mit Paneelwagen silber', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Einzelpaneel mit Beschwerungsstab *******************
        await page.locator('div[options-property="endstab"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel - mit Beschwerungsstab', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Einzelpaneel mit Designprofil *******************
        await page.locator('div[options-property="endstab"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Einzelpaneel - mit Designprofil', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

    });

    test('Schiebegardine Gesamtsystem', async function ({ page }) {

        // ******************* Schiebegardine Gesamtsystem *******************
        await page.getByText(/Schiebegardine mit Schienensystem/).first().click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine GS: 1 Paneel (Mindestmaß) *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('300');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('300');

        // click out
        await page.locator('h1').getByText(/Paneele anpassen/).first().click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 1 Paneel', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine GS: 2 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('551');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 2 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 3 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('2351');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 3 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 4 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('3501');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 4 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 5 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('4651');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 5 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 6 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('5801');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 6 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 7 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('5900');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');
        await page.locator('#paneelnumber input').clear();
        await page.locator('#paneelnumber input').fill('7');

        // click out
        await page.locator('h1').getByText(/Paneele anpassen/).first().click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 7 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: 8 Paneele *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('5900');
        await page.locator('#hoehe_in_mm input').clear();
        await page.locator('#hoehe_in_mm input').fill('2000');
        await page.locator('#paneelnumber input').clear();
        await page.locator('#paneelnumber input').fill('8');

        // click out
        await page.locator('h1').getByText(/Paneele anpassen/).first().click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - 8 Paneele', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: Schienenlauf 3 *******************

        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('1400');
        await page.locator('div[options-property="schienenlaeufe"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - Schienenlauf 3', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine GS: Schienenlauf 4 *******************
        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('1750');
        await page.locator('div[options-property="schienenlaeufe"] > ul > :nth-child(3)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - Schienenlauf 4', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine GS: Schienenlauf 5 *******************
        await page.locator('#breite_in_mm input').clear();
        await page.locator('#breite_in_mm input').fill('2200');
        await page.locator('div[options-property="schienenlaeufe"] > ul > :nth-child(4)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - Schienenlauf 5', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Schiebegardine GS: Alugriff *******************
        await page.locator('div[options-property="bediengriff"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - Alugriff', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Schiebegardine GS: Kunststoffgriff *******************
        await page.locator('div[options-property="bediengriff"] > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardine Gesamtsystem - Kunststoffgriff', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
