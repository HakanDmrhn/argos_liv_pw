import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - simulated mobile testing on plissee category page', function () {
  test('mobile testing on plissee category page', async function ({ page }) {
    // iphone-6
    // await page.setViewportSize('iphone-6');
    await page.setViewportSize({ width: 375, height: 667 })

    // load category page
    await page.goto('/plissee/plissee-rot', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - /plissee/plissee-rot')

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Ambience 4477 Rot ------------------------------------//

    // activate tooltip of Ambience 4477 Rot
    await page.locator('img[alt="Plissee Ambience 4477 Rot"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Plissee Ambience 4477 Rot"]').click()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - active tooltip - Ambience 4477 Rot', { fullPage: false })

    // deactivate tooltip of Ambience 4477 Rot
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - tooltip closed - Ambience 4477 Rot', { fullPage: false })

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Color Breeze 4678 --------------------------------------//

    // activate tooltip of Color Breeze 4678
    await page.locator('img[alt="Color Breeze 4678"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Color Breeze 4678"]').click()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - active tooltip - Color Breeze 4678', { fullPage: false })

    // deactivate tooltip of Color Breeze 4678
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - tooltip closed - Color Breeze 4678', { fullPage: false })

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Wabe Glow 2161 --------------------------------------//

    // activate tooltip of Wabe Glow 2161
    await page.locator('img[alt="Wabe Glow 2161"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Wabe Glow 2161"]').click()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - active tooltip - Wabe Glow 2161', { fullPage: false })

    // deactivate tooltip of Wabe Glow 2161
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view plissee - tooltip closed - Wabe Glow 2161', { fullPage: false })
  })
})
