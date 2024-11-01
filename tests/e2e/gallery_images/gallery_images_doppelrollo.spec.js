import { argosScreenshot } from '@argos-ci/playwright'
// import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - image popups Doppelrollo-Konfigurator', function () {
  test('argos snapshots of doppelrollo gallery images - PDP', async function ({ page }) {
    await page.goto('/doppelrollo/remsa-5067', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    await page.locator('#big-img').waitFor()
    await page.locator('#big-img').click()
    await expect(page.locator('.lightbox_wrapper')).toBeVisible()
    // take argos screenshot
    await argosScreenshot(page, '1st popup image of remsa-5067', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '2nd popup image of remsa-5067', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '3rd popup image of remsa-5067', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '4th popup image of remsa-5067', {
      fullPage: false
    })
  })

  test('argos snapshots of doppelrollo picture galleries - Konfigurator', async function ({ page }) {
    await page.goto('/doppelrollo/doppelrollo-konfigurator')
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // scroll the big image into view
    await page.locator('div.box').scrollIntoViewIfNeeded()

    await page.locator('.images a').last().click()
    await expect(page.locator('.lightbox_wrapper')).toBeVisible()

    // take argos screenshot
    await argosScreenshot(page, '4th popup image of Doppelrollo-Konfigurator', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-back').click()
    // take argos screenshot
    await argosScreenshot(page, '3rd popup image of Doppelrollo-Konfigurator', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-back').click()
    // take argos screenshot
    await argosScreenshot(page, '2nd popup image of Doppelrollo-Konfigurator', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-back').click()
    // take argos screenshot
    await argosScreenshot(page, '1st popup image of Doppelrollo-Konfigurator', {
      fullPage: false
    })
  })
})
