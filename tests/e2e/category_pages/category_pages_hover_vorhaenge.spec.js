import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on vorhaenge category pages', function () {

    test('hover on vorhaenge category page /oesenschal', async function ({ page }) {

        // load category page
        await page.goto('/oesenschal');
        await page.evaluate(scrollToBottom);
        // await page.waitForTimeout(2000);

        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Sorrento Vorhang Farbe Rose ---------------------------//

        const sorrentoVorhang = page.getByRole('link', { name: "Sorrento Vorhang Weiß" });

        await sorrentoVorhang.scrollIntoViewIfNeeded()

        await sorrentoVorhang.locator('..').locator('.item__colors > label>>nth=5').click() // ACHTUNG: Position der gewünschten Farbe Rose kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Sorrento Vorhang Rose', {
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
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Lavello Vorhang Rose-- ---------------------------//

        const lavelloVorhang = page.getByRole('link', { name: "Lavello Vorhang Grün" });

        await lavelloVorhang.scrollIntoViewIfNeeded()

        await lavelloVorhang.locator('..').locator('.item__colors > label>>nth=8').click() // ACHTUNG: Position der gewünschten Farbe Rose kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Lavello Vorhang Rose', {
            fullPage: false,
            disableHover: false
        });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Bovino Vorhang Hellgelb ---------------------------//

        const bovinoVorhang = page.getByRole('link', { name: "Bovino Vorhang Grün" });

        await bovinoVorhang.scrollIntoViewIfNeeded()

        await bovinoVorhang.locator('..').locator('.item__colors > label>>nth=3').click() // ACHTUNG: Position der gewünschten Farbe Hellgelb kann sich ändern

        // take argos screenshot of tooltip
        await argosScreenshot(page, 'hover - Bovino Vorhang Hellgelb', {
            fullPage: false,
            disableHover: false
        });
    });
});
