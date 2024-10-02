import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - simulated mobile testing on raffrollo category page', function () {
  test('mobile testing on raffrollo category page', async function ({ page }) {
    // iphone-6
    // await page.setViewportSize('iphone-6');
    await page.setViewportSize({ width: 375, height: 667 })

    // load category page
    await page.goto('/raffrollo/raffrollo-beige', { waitUntil: 'load' })
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
    await argosScreenshot(page, 'mobile view raffrollo - /raffrollo/raffrollo-beige')

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Zadar 9021 ------------------------------------//

    // activate tooltip of Zadar 9021
    await page.locator('img[alt="Zadar 9021"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Zadar 9021"]').click()

    // wait till all 4 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Zadar 9021', { fullPage: false })

    // deactivate tooltip of Zadar 9021
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Zadar 9021', { fullPage: false })

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Chiave 9099 --------------------------------------//

    // activate tooltip of Chiave 9099
    await page.locator('img[alt="Chiave 9099"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Chiave 9099"]').click()

    // wait till all 4 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Chiave 9099', { fullPage: false })

    // deactivate tooltip of Chiave 90990
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Chiave 9099', { fullPage: false })

    // -------------------------------- TOOLTIP ---------------------------------------//
    // ------------------------------ Gola 9015 --------------------------------------//

    // activate tooltip of Gola 9015
    await page.locator('img[alt="Gola 9015"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Gola 9015"]').click()

    // wait till all 4 mini tooltip images are present
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(4)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - active tooltip - Gola 9015', { fullPage: false })

    // deactivate tooltip of Gola 9015
    await page.locator('div.tooltip.active').click()

    // take argos screenshot
    await argosScreenshot(page, 'mobile view raffrollo - tooltip closed - Gola 9015', { fullPage: false })
  })
})
