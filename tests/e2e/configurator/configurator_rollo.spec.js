import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreMenuContainer, ignoreFreshChat } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - rollo configurator', function () {

    test.beforeEach(async function ({ page }) {

        await page.goto('/rollo/rollo-konfigurator');
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);
        await page.evaluate(scrollToBottom);

    });

    test('rechteckige Rollos - ohne Kassette', async function ({ page }) {


        // ******************* ohne Kassette - verschraubt am Fensterflügel *******************
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - ohne Kassette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - an der Wand *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(3)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - an der Wand', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - an der Decke *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(4)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - an der Decke', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - Klemmträger *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - Klemmträger', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Halterung Metall *******************
        // --> RM32 Metall --> weitere Volanttypen somit sichtbar 
        await page.locator('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - Metallhalterung', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - Aluleiste rund *******************
        await page.locator('div[options-property="volant"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - Aluleiste rund', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - kein Volant *******************
        // kein Volant wählen, damit Pendelsicherung (30,00 eur) sichtbar wird für nächsten Schritt
        await page.locator('div[options-property="volant"] > ul > :nth-child(1)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - kein Volant', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* ohne Kassette - mit Pendelsicherung 30,00 *******************
        await page.locator('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - mit Pendelsicherung (30,00)', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Halterung Kunststoff mit Pendelsicherung 8,00 ******************* 
        //--> Halterung Kunststoff wählen, damit Pendelsicherung (8,00 eur) sichtbar wird
        await page.locator('div[options-property="halterungMaterial"] > :nth-child(3) > :nth-child(1)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - mit Pendelsicherung (8,00)', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* ohne Kassette - mit Motorbedienung *******************
        await page.locator('div[options-property="bedienung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - oK - mit Motorbedienung', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

    });

    test('rechteckige Rollos - mit Kassette', async function ({ page }) {


        // ******************* mit Kassette - verschraubt am Fensterflügel*******************
        await page.locator('div[options-property="kassette"] > ul > :nth-child(2)').click();

        // take argos screenshot
        await argosScreenshot(page, 'Rollo - mit Kassette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo -  mK - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Rollo Höhe und Breite eingeben *******************
        //input height and weight
        await page.locator('#hoehe_in_mm input').fill('1000');
        await page.locator('#breite_in_mm input').fill('1000');

        // ******************* ohne Kassette - mit Motorbedienung *******************
        await page.locator('div[options-property="bedienung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Rollo - mK - mit Motorbedienung', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });

    test('Mini-Rollos - LUX', async function ({ page }) {


        // ******************* Mini-Rollo wählen *******************
        await page.locator('.tab_description').getByText(/Mini-Rollos/).first().waitFor();
        await page.locator('.tab_description').getByText(/Mini-Rollos/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - LUX', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Mini-Rollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - LUX - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX wählen *******************
        await page.locator('div[options-property="rollotyp"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX: Führungsschiene wählen *******************
        await page.locator('div[options-property="fuehrungsschiene"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX - Führunsgschiene', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX: mit Klebeband am Fensterflügel *******************
        await page.locator('div[options-property="befestigung"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX - Klebeband', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX: Bedienseite rechts *******************
        await page.locator('div[options-property="bedienseite"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX - Bedienseite rechts', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX: Metallkette *******************
        await page.locator('div[options-property="bedienungFabric"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX - Metallkette', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* MINI-LUX: kostenpflichtige Farbauswahl *******************
        await page.locator('div[options-property="farbeKassette"] > ul > :nth-child(7)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Mini-Rollo - MINI-LUX - Kassettenfarbe mahagoni', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });

    test('Dachfensterrollos', async function ({ page }) {


        // ******************* Dachfenster-Rollos wählen *******************
        await page.locator('.tab_description').getByText(/Dachfensterrollos/).first().waitFor();
        await page.locator('.tab_description').getByText(/Dachfensterrollos/).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Dachfensterrollos', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });



        // ******************* Rollo-Farbe & Eigenschaften wählen *******************
        await page.locator('.configurator-button-subsection').click();
        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Stoff ändern', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Dachfenster-Rollos Velux + anderes Produkt *******************
        await page.locator('span').getByText(/Velux/).first().click();
        await expect(page.locator('.dfselect_wrapper > :nth-child(1) select')).toBeEnabled();
        await page.locator('.dfselect_wrapper > :nth-child(1) select').selectOption({ label: 'anderes Produkt' });
        
        // wait for falztyp pictures
        await page.locator('#falztyp .options_list.two_options_row').waitFor()

        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Velux - anderes Produkt', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Dachfenster-Rollos Velux + anderer Typ *******************
        await expect(page.locator('.dfselect_wrapper > :nth-child(1) select')).toBeEnabled();
        await page.locator('.dfselect_wrapper > :nth-child(1) select').selectOption({ label: 'GDL' });
        await expect(page.locator('.dfselect_wrapper > :nth-child(2) select')).toBeEnabled();
        await page.locator('.dfselect_wrapper > :nth-child(2) select').selectOption({ label: 'anderer Typ' });

        // wait for falztyp pictures
        await page.locator('#falztyp .options_list.two_options_row').waitFor()

        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Velux - anderer Typ', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Dachfenster-Rollos Roto *******************
        await page.locator('#hersteller > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Roto', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Dachfenster-Rollos Fakro *******************
        await page.locator('#hersteller > ul > :nth-child(3)').click();
        //if Fakro is selected slection 'Produkt' sholud be enabled before snaphot is taken
        await expect(page.locator('.dfselect_wrapper > :nth-child(1) select')).toBeEnabled();
        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Fakro', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        // ******************* Dachfenster-Rollos Anderer Hersteller *******************
        await page.locator('#hersteller > ul > :nth-child(4)').click();
        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Anderer Hersteller', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // ******************* Dachfenster-Rollos - Bedienstab *******************
        await page.locator('div[options-property="bedienstab"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'DF-Rollo - Bedienstab', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
