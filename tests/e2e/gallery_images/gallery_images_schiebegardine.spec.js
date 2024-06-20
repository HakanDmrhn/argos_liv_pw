import { argosScreenshot } from "@argos-ci/playwright";
import { test, expect } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';


test.describe('Integration test with visual testing - image popups Schiebegardine-Konfigurator', function () {

    test('argos snapshots of schiebegardine gallery images - PDP', async function ({ page }) {

        await page.goto('/schiebegardinen/philo-7324');
        await ignoreFreshChat(page);


        await page.locator('#big-img').waitFor();
        await page.locator('#big-img').click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();
        // take argos screenshot
        await argosScreenshot(page, '1st popup image of philo-7324', {
            fullPage: false
        });

        // click next
        await page.locator('#img-popup-next').click();
        // take argos screenshot
        await argosScreenshot(page, '2nd popup image of philo-7324', {
            fullPage: false
        });
    });

    test('argos snapshots of schiebegardine picture galleries - Konfigurator', async function ({ page }) {

        await page.goto('/schiebegardinen/schiebegardinen-konfigurator');
        await ignoreFreshChat(page);

        // scroll the big image into view
        await page.locator('div[class="box"]').scrollIntoViewIfNeeded();

        await page.locator('.images a').first().click();
        await expect(page.locator('.lightbox_wrapper')).toBeVisible();

        // take argos screenshot
        await argosScreenshot(page, '1st popup image of Schiebegardinen-Konfigurator', {
            fullPage: false
        });
    });
});
