import { argosScreenshot } from '@argos-ci/playwright'
// import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const data = require('../../fixtures/cms_prio2_plissee.json')
const pages = data.URLS
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - Plissee CMS Prio2 pages', function () {
  pages.forEach(function (link) {
    test('Load page: ' + link + ' & take argos snapshot', async function ({ page }) {
      await page.goto(link)
      // Scroll the page to trigger lazy-loaded content
      await page.evaluate(scrollToBottom)
      await page.waitForFunction(() => document.fonts.ready)
      await checkButtonAvailability(page)
      await ignoreMenuContainer(page)

      // ensure that the page has fully loaded by waiting for the logo
      const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
      await expect(livoneoLogo).toBeVisible()
      await livoneoLogo.hover()
      await page.mouse.move(0, 0)

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
