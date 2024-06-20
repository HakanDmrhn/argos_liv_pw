import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';


test.describe('Integration test with visual testing - image popups Rollo-Konfigurator', function () {

    test('argos snapshots of rollo gallery images - PDP', async function ({ page }) {

        await page.goto('/rollo/blackout-reflex-3517');
        await ignoreFreshChat(page);


        await page.locator('#big-img').waitFor();
        await page.locator('#big-img').click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of blackout-reflex-3517', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of blackout-reflex-3517', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of blackout-reflex-3517', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '4th popup image of blackout-reflex-3517', {
            fullPage: false
        });
    });

    test('argos snapshots of rollo picture galleries - Konfigurator', async function ({ page }) {

        await page.goto('/rollo/rollo-konfigurator');
        await ignoreFreshChat(page);

        // scroll the big image into view
        await page.locator('div[class="box"]').scrollIntoViewIfNeeded();

        await page.locator('.images a').last().click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();

        // take argos screenshot
        await argosScreenshot(page, '4th popup image of Rollo-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of Rollo-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of Rollo-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of Rollo-Konfigurator', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-back').click();
        // take argos screenshot
        await argosScreenshot(page, '5th popup image of Rollo-Konfigurator', {
            fullPage: false
        });
    });
});
