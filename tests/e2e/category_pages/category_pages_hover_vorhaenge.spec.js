import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on vorhaenge category pages', function () {

    test('hover on vorhaenge category page /oesenschal', async function ({ page }) {

        // load category page
        await ignoreFreshChat(page);
        await ignoreYoutube(page);
        await page.goto('/oesenschal', { waitUntil: 'load' });
        await page.waitForFunction(() => document.fonts.ready);
        await page.evaluate(scrollToBottom);
        await checkButtonAvailability(page);
        await ignoreMenuContainer(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Sorrento Vorhang Farbe Rose ---------------------------//

        const sorrentoVorhang = page.getByRole('link', { name: 'Stella Vorhang Beere'});

        await sorrentoVorhang.scrollIntoViewIfNeeded()

        await sorrentoVorhang.locator('..').locator('.item__colors > label>>nth=3').click() // ACHTUNG: Position der gewünschten Farbe Rose kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Stella Vorhang Beere', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Vorhang Velvet Farbe Jade ---------------------------//

        const velvetVorhang = page.getByRole('link', { name: "Velvet Vorhang Weiß" });

        await velvetVorhang.scrollIntoViewIfNeeded()

        await velvetVorhang.locator('..').locator('.item__colors > label>>nth=9').click() // ACHTUNG: Position der gewünschten Farbe Jade kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Vorhang Velvet Jade', {
            fullPage: false,
            disableHover: false
        });
    });

    test('hover on vorhaenge category page /vorhaenge-kinderzimmer', async function ({ page }) {

        // load category page
        await page.goto('/vorhaenge-kinderzimmer');
        await page.waitForFunction(() => document.fonts.ready);
        await page.evaluate(scrollToBottom);
        await checkButtonAvailability(page);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Lavello Vorhang Rose-- ---------------------------//

        const lavelloVorhang = page.getByRole('link', { name: "Lavello Vorhang Grün" });

        await lavelloVorhang.scrollIntoViewIfNeeded()

        await lavelloVorhang.locator('..').locator('.item__colors > label>>nth=8').click() // ACHTUNG: Position der gewünschten Farbe  kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Lavello Vorhang Grün', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Bovino Vorhang Grün ---------------------------//

        const bovinoVorhang = page.getByRole('link', { name: "Tazio Verdunklungsvorhang Petrol", exact: true });

        await bovinoVorhang.scrollIntoViewIfNeeded()

        await bovinoVorhang.locator('..').locator('.item__colors > label>>nth=3').click() // ACHTUNG: Position der gewünschten Farbe Hellgelb kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Tazio Verdunklungsvorhang', {
            fullPage: false,
            disableHover: false
        });
    });
});
