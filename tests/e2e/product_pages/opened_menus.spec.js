import { test } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";
import { ignoreFreshChat, ignoreYoutube } from '../support/helpers'
let scrollToBottom = require("scroll-to-bottomjs");



test.describe('Integration test with visual testing - opened menus', function () {

    test('opened menus - Plissee', async function ({ page }) {

        // load main page
        await page.goto('/');
        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("#colors > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Plissee-Menü - Plissee nach Farben', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#rooms > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Plissee-Menü - Plissee für Räume', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#characteristics > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Plissee-Menü - Plissee nach Eigenschaften', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#guide > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Plissee-Menü - Ratgeber', {
            fullPage: false,
            disableHover: false
        });
    });

    test('opened menus - Rollo', async function ({ page }) {

        // load main page
        await page.goto('/');

        // go to tab 'Rollos'
        await page.locator("ol > li:nth-of-type(2) > a").click()

        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("#colors > a").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Rollo-Menü - Rollo nach Farben', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#rooms > a").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Rollo-Menü - Rollo für Räume', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#characteristics > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Rollo-Menü - Rollo nach Eigenschaften', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#guide > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Rollo-Menü - Ratgeber', {
            fullPage: false,
            disableHover: false
        });
    });

    test('opened menus - Doppelrollo', async function ({ page }) {

        // load main page
        await page.goto('/');

        // go to tab 'Doppelrollo'
        await page.locator("ol > li:nth-of-type(3) > a").click()

        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("#colors > a").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Doppelrollo-Menü - Doppelrollo nach Farben', {
            fullPage: false,
            disableHover: false
        });
    });

    test('opened menus - Vorhänge', async function ({ page }) {

        // load main page
        await page.goto('/');

        // go to tab 'Vorhänge'
        await page.locator("ol > li:nth-of-type(6) > a").click()

        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("li.nav-6 li:nth-of-type(1) > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Vorhänge-Menü - Vorhänge', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("li.nav-6 li:nth-of-type(2) > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Vorhänge-Menü - Gardinen', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("li.nav-6 li:nth-of-type(3) > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Vorhänge-Menü - Ösenschal', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("li.nav-6 li:nth-of-type(4) > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Vorhänge-Menü - Dekoschal', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("li.nav-6 li:nth-of-type(7) > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Vorhänge-Menü - Zubehör', {
            fullPage: false,
            disableHover: false
        });
    });

    test('opened menus - Schiebegardinen', async function ({ page }) {

        // load main page
        await page.goto('/');

        // go to tab 'Schiebegardinen'
        await page.locator("li.nav-7 span").click()

        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("#colors > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Farben', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#characteristics > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Eigenschaften', {
            fullPage: false,
            disableHover: false
        });
    });

    test('opened menus - Raffrollos', async function ({ page }) {

        // load main page
        await page.goto('/');

        // go to tab 'Raffrollos'
        await page.locator("ol > li:nth-of-type(8) span").click()

        await page.evaluate(scrollToBottom);
        await ignoreFreshChat(page);
        await ignoreYoutube(page);

        await page.locator("#colors > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo nach Farben', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#rooms > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo für Räume', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#characteristics > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo nach Eigenschaften', {
            fullPage: false,
            disableHover: false
        });

        await page.locator("#guide > a > span").hover()
        // take argos screenshot
        await argosScreenshot(page, 'Raffrollo-Menü - Ratgeber', {
            fullPage: false,
            disableHover: false
        });
    });
});
