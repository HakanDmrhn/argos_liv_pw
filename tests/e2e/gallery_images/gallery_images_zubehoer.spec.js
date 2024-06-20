import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';


test.describe('Integration test with visual testing - image popups Zubehör', function () {

    test('argos snapshots of wandwinkel gallery images - PDP', async function ({ page }) {

        await page.goto('/wandwinkel');
        await ignoreFreshChat(page);


        await page.locator('#big-img').waitFor();
        await page.locator('#big-img').click();
        
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of wandwinkel', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of wandwinkel', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of wandwinkel', {
            fullPage: false
        });
    });

    test('argos snapshots of gelenkklebeplatten gallery images - PDP', async function ({ page }) {

        await page.goto('/gelenkklebeplatten');
        await ignoreFreshChat(page);


        await page.locator('#big-img').waitFor();
        await page.locator('#big-img').click();

        await expect(page.locator('.lightbox_wrapper')).toBeVisible();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of gelenkklebeplatten', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of gelenkklebeplatten', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '3rd popup image of gelenkklebeplatten', {
            fullPage: false
        });
    });

});
