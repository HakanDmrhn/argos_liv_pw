import { argosScreenshot } from '@argos-ci/playwright'
//import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - image popups Raffrollo-Konfigurator', function () {
  test('argos snapshots of raffrollo gallery images - PDP', async function ({ page }) {

    await page.goto('/raffrollo/grada-9236', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    await page.locator('#big-img').waitFor()
    await page.locator('#big-img').click()
    await expect(page.locator('.lightbox_wrapper')).toBeVisible()
    // take argos screenshot
    await argosScreenshot(page, '1st popup image of grada-9236', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '2nd popup image of grada-9236', {
      fullPage: false
    })
  })

  test('argos snapshots of raffrollo picture galleries - Konfigurator', async function ({ page }) {
    await page.goto('/raffrollo/raffrollo-konfigurator')
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)
    await ignoreMenuContainer(page)

    // scroll the big image into view
    await page.locator('div.box').scrollIntoViewIfNeeded()

    await page.locator('.images a').first().click()
    await expect(page.locator('.lightbox_wrapper')).toBeVisible()

    // take argos screenshot
    await argosScreenshot(page, '1st popup image of Raffrollo-Konfigurator', {
      fullPage: false
    })
  })
})
