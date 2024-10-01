import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - hover on schiebegardine category pages', function () {
  test('hover on schiebegardine category page', async function ({ page }) {
    // load category page
    await page.goto('/schiebegardinen/schiebegardinen-blau', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)


    // ------------------------------------- TOOLTIP -----------------------------------//
    // ------------------------------ Schiebegardine Bonito 7337 -----------------------//

    // activate tooltip of Schiebegardine Bonito 7337
    await page.locator('img[alt="Schiebegardine Bonito 7337"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Schiebegardine Bonito 7337"]').hover()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - schiebegardine Schiebegardine Bonito 7337', {
      fullPage: false,
      disableHover: false
    })

    // ------------------------------------- TOOLTIP -----------------------------------//
    // ------------------------------ Schiebegardine Shana 7334 -----------------------//

    // activate tooltip of Schiebegardine Shana 7334
    await page.locator('img[alt="Schiebegardine Shana 7334"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Schiebegardine Shana 7334"]').hover()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - schiebegardine Schiebegardine Shana 7334', {
      fullPage: false,
      disableHover: false
    })
  })
})
