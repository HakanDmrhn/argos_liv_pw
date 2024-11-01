import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability, ensureFullVisibility } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - hover on doppelrollo category pages', function () {
  test('hover on doppelrollo category page', async function ({ page }) {
    await page.goto('/doppelrollo/doppelrollo-grau', { waitUntil: 'load' })
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
    // ------------------------------ doppelrollo Acorda 5090 -----------------------//

    // activate tooltip of Acorda 5090
    await ensureFullVisibility(page, 'img[alt="Acorda 5090"]')
    await page.locator('img[alt="Acorda 5090"]').hover()

    // wait till all 5 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(5)

    // iterate through all gallery images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - Doppelrollo Acorda 5090', {
      fullPage: false,
      disableHover: false
    })

    // ------------------------------------- TOOLTIP -----------------------------------//
    // ------------------------------ doppelrollo Lacinia 5053 -----------------------//

    // activate tooltip of Lacinia 5053
    await ensureFullVisibility(page, 'img[alt="Lacinia 5053"]')
    await page.locator('img[alt="Lacinia 5053"]').hover()

    // wait till all 4 mini tooltip images are present
    await expect(page.locator('.tooltip:visible > .tooltip-info-container > ul li')).toHaveCount(4)

    // iterate through all gallery images and check if visible
    for (const element of await page.locator('.tooltip:visible > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // take argos screenshot of tooltip
    await argosScreenshot(page, 'hover - Doppelrollo Lacinia 5053', {
      fullPage: false,
      disableHover: false
    })
  })
})
