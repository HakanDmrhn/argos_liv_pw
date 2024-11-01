import { argosScreenshot } from '@argos-ci/playwright'
// import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - image popups Zubehör', function () {
  test('argos snapshots of wandwinkel gallery images - PDP', async function ({ page }) {
    await page.goto('/wandwinkel', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    await page.locator('#big-img').waitFor()
    await page.locator('#big-img').click()

    await expect(page.locator('.lightbox_wrapper')).toBeVisible()
    // take argos screenshot
    await argosScreenshot(page, '1st popup image of wandwinkel', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '2nd popup image of wandwinkel', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '3rd popup image of wandwinkel', {
      fullPage: false
    })
  })

  test('argos snapshots of gelenkklebeplatten gallery images - PDP', async function ({ page }) {
    await page.goto('/gelenkklebeplatten')
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    await page.locator('#big-img').waitFor()
    await page.locator('#big-img').click()

    await expect(page.locator('.lightbox_wrapper')).toBeVisible()
    // take argos screenshot
    await argosScreenshot(page, '1st popup image of gelenkklebeplatten', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '2nd popup image of gelenkklebeplatten', {
      fullPage: false
    })

    // click next
    await page.locator('#img-popup-next').click()
    // take argos screenshot
    await argosScreenshot(page, '3rd popup image of gelenkklebeplatten', {
      fullPage: false
    })
  })
})
