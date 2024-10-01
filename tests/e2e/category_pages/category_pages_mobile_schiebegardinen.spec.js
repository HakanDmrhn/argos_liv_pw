import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - simulated mobile testing on Schiebegardinen category page', function () {
  test('Mobile testing on Schiebegardinen category page', async function ({ page }) {
    // Set viewport to iPhone 6 dimensions
    await page.setViewportSize({ width: 375, height: 667 })

    // Load category page
    await page.goto('/schiebegardinen/schiebegardinen-beige', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // Ensure that the page has fully loaded by waiting for the logo
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // Take initial Argos screenshot
    await argosScreenshot(page, 'mobile-view-schiebegardinen-category-initial')

    // TOOLTIP TEST: Schiebegardine Ukko 7330
    await page.locator('img[alt="Schiebegardine Ukko 7330"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Schiebegardine Ukko 7330"]').click()
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    // Check tooltip images visibility
    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    // Take Argos screenshot with active tooltip
    await argosScreenshot(page, 'mobile-view-schiebegardinen-ukko-tooltip-active', { fullPage: false })

    // Close tooltip and take another screenshot
    await page.locator('div.tooltip.active').click()
    await argosScreenshot(page, 'mobile-view-schiebegardinen-ukko-tooltip-closed', { fullPage: false })

    // Repeat for Schiebegardine Bonito 7336
    await page.locator('img[alt="Schiebegardine Bonito 7336"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Schiebegardine Bonito 7336"]').click()
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    await argosScreenshot(page, 'mobile-view-schiebegardinen-bonito-tooltip-active', { fullPage: false })
    await page.locator('div.tooltip.active').click()
    await argosScreenshot(page, 'mobile-view-schiebegardinen-bonito-tooltip-closed', { fullPage: false })

    // Repeat for Schiebegardine Naru 7297
    await page.locator('img[alt="Schiebegardine Naru 7297"]').scrollIntoViewIfNeeded()
    await page.locator('img[alt="Schiebegardine Naru 7297"]').click()
    await expect(page.locator('.tooltip.active > .tooltip-info-container > ul li')).toHaveCount(5)

    for (const element of await page.locator('.tooltip.active > .tooltip-info-container > ul > li img').all()) {
      await element.waitFor()
    }

    await argosScreenshot(page, 'mobile-view-schiebegardinen-naru-tooltip-active', { fullPage: false })
    await page.locator('div.tooltip.active').click()
    await argosScreenshot(page, 'mobile-view-schiebegardinen-naru-tooltip-closed', { fullPage: false })
  })
})
