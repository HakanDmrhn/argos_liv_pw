import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

// Define search terms for each page
const productSearchTerms = {
  '/klemmtraeger': 'klemmträger',
  '/gardinenstangen/kegel': 'kegel',
  '/aenderungsauftrag-breite': 'breite',
  '/schiebegardinen/mica-7342': 'mica',
  '/rollo/arkona-3667': 'arkona',
  '/raffrollo/sunta-9043': 'sunta',
  '/plissee/blackout-classic-1102': 'blackout',
  '/insektenschutz/fliegengitter': 'fliegengitter',
  '/plissee-kleben': 'kleben',
  '/doppelrollo/remsa-5057': 'remsa',
  '/plissee': 'perlex',
  '/': 'ozean',
  '/': '1=1'
}

test.describe('Integration test with visual testing - search function', function () {
  Object.entries(productSearchTerms).forEach(([link, searchTerm]) => {
    test(`Load page: ${link} - Enter search term "${searchTerm}" and take Argos snapshot`, async function ({ page }) {
      // visit url
      await page.goto(link, { waitUntil: 'load' })
      await page.waitForFunction(() => document.fonts.ready)
      await checkButtonAvailability(page)
      await ignoreMenuContainer(page)

      // Enter the search term into the input field
      await page.fill('#search', searchTerm)

      // Submit the form
      await page.getByRole('button', { name: 'Suchen' }).click()
      await page.waitForFunction(() => document.fonts.ready)
      await ignoreMenuContainer(page)

      // ensure that the page has fully loaded by waiting for the logo c
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
