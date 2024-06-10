import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreMenuContainer, ignoreFreshChat } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - raffrollo configurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/raffrollo/raffrollo-konfigurator');
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);
        await page.evaluate(scrollToBottom);

    });

    test('Raffrollos', async function ({ page }) {

        // ******************* Startseite Raffrollo Konfigurator *******************
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo Konfigurator', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Raffrollo Höhe und Breite eingeben **************
        //input height and weight
        await page.locator('#hoehe_in_mm input').fill('250');
        await page.locator('#breite_in_mm input').fill('120');


        // ******************* Raffrollo - an der Wand *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(1)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - an der Wand', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - an der Decke *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - an der Decke', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - Fensterflügel *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Fensterflügel', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Raffrollo - Klemmträger *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(4)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Klemmträger', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - Kette transparent ******************* 
        await page.locator('div[options-property="farbeKette"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Kunststoffkette transparent', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - Kette grau ******************* 
        await page.locator('div[options-property="farbeKette"] > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Kunststoffkette grau', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - Metallkette ******************* 
        await page.locator('div[options-property="ketteMaterial"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Metallkette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Raffrollo - Metallkette Bedienseite rechts******************* 
        await page.locator('div[options-property="bedienseite"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo - Bedienseite rechts', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
