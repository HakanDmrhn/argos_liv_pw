import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
let scrollToBottom = require("scroll-to-bottomjs");


test.describe('Integration test with visual testing - hover on vorhaenge category pages', function () {

    test('hover on vorhaenge category page /oesenschal', async function ({ page }) {

        // load category page
        await page.goto('/oesenschal');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Sorrento Vorhang Farbe Rose ---------------------------//

        // await page.locator('img[alt="Sorrento Vorhang Weiß"]').scrollIntoViewIfNeeded()

        // // activate tooltip of Sorrento Vorhang Rose (6th child of colors)
        // await page.locator('a[title="Sorrento Vorhang Weiß"]').locator('..')
        // await page.locator("li:nth-of-type(20) > div.item__colors > label>>nth=7").click()

        // // take argos screenshot of tooltip
        // await argosScreenshot(page, 'hover - Sorrento Vorhang Rose', {
        //     fullPage: false,
        //     disableHover: false
        // });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Vorhang Velvet Farbe Jade ---------------------------//

        // await page.locator("li:nth-of-type(9)").scrollIntoViewIfNeeded()
        
        // // activate tooltip of Vorhang Velvet Jade (10th child of colors)
        // await page.locator("li:nth-of-type(9) > div.item__colors > label>>nth=9").click()

        // // take argos screenshot of tooltip
        // await argosScreenshot(page, 'hover - Vorhang Velvet Jade', {
        //     fullPage: false,
        //     disableHover: false
        // });
    });

    test('hover on vorhaenge category page /vorhaenge-kinderzimmer', async function ({ page }) {

        // load category page
        await page.goto('/vorhaenge-kinderzimmer');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);


        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Lavello Vorhang Rose-- ---------------------------//

        // await page.locator("li:nth-of-type(13)").scrollIntoViewIfNeeded()

        // // activate tooltip of Lavello Vorhang Rose (9th child of colors)
        // await page.locator("li:nth-of-type(13) > div.item__colors > label>>nth=8").click()

        // // take argos screenshot of tooltip
        // await argosScreenshot(page, 'hover - Lavello Vorhang Rose', {
        //     fullPage: false,
        //     disableHover: false
        // });



        //------------------------------------- TOOLTIP -----------------------------------//
        //------------------------------ Bovino Vorhang Hellgelb ---------------------------//

        // await page.locator("li:nth-of-type(13)").scrollIntoViewIfNeeded()

        // // activate tooltip of Bovino Vorhang Hellgelb (4th child of colors)
        // await page.locator("li:nth-of-type(13) > div.item__colors > label>>nth=3").click()

        // // take argos screenshot of tooltip
        // await argosScreenshot(page, 'hover - Bovino Vorhang Hellgelb', {
        //     fullPage: false,
        //     disableHover: false
        // });
    });
});
