import { argosScreenshot } from '@argos-ci/playwright'
//import { test } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreFreshChat, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const data = require('../../fixtures/cms_prio1_diverse_II.json')
const pages = data.URLS
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - Diverse CMS Prio1 pages (only branchen)', function () {
  pages.forEach(function (link) {
    test('Load page: ' + link + ' & take argos snapshot', async function ({ page }) {
      // block FreshChat script execution

      await page.goto(link, { waitUntil: 'load' })
      await page.waitForFunction(() => document.fonts.ready)
      await page.evaluate(scrollToBottom)
      await checkButtonAvailability(page)
      await ignoreMenuContainer(page)

      // take argos screenshot
      await argosScreenshot(page, link, {
        viewports: [
          'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
          'iphone-6' // Use device preset for iphone-6 --> 375x667
        ]
      })
    })
  })
})
