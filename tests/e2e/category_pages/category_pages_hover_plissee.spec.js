import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability, ensureFullVisibility } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - hover on plissee category pages', function () {
  test('hover on plissee category page', async function ({ page }) {
    // load category page
    await page.goto('/plissee/plissee-gelb', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // ------------------------------------- TOOLTIP -----------------------------------//
    // ------------------------------ Plissee Color Breeze 1740 -----------------------//

    // activate tooltip of Color Breeze 1740
    await ensureFullVisibility(page, 'img[alt="Color Breeze 1740"]')
    await page.locator('img[alt="Color Breeze 1740"]').hover()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - Plissee Color Breeze 1740', {
      fullPage: false,
      disableHover: false
    })

    // ------------------------------------- TOOLTIP -----------------------------------//
    // ------------------------------ PLISSEE Cielo Perl 1904 -----------------------//

    // activate tooltip of Cielo Perl 1904
    await ensureFullVisibility(page, 'img[alt="Cielo Perl 1904"]')
    await page.locator('img[alt="Cielo Perl 1904"]').hover()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all tooltip images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - Plissee Cielo Perl 1904', {
      fullPage: false,
      disableHover: false
    })
  })
})
