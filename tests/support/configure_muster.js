import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures and requests free fabric samples for various products.
 *
 * This function navigates to multiple product pages, waits for elements to load,
 * and clicks the button to request free fabric samples for each product type.
 *
 * @async
 * @function configure_muster
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_muster (page) {
  // Define the product URLs and their corresponding sample request buttons
  const productPages = [
    '/doppelrollo/rayure-5007',
    '/plissee/poesia-1824',
    '/raffrollo/corsia-9135',
    '/rollo/blackout-unicolor-3110',
    '/schiebegardinen/hilko-7316',
    '/vorhaenge/dekoschal/bosco'
  ]

  for (const url of productPages) {
    // Load the product page
    await page.goto(url, { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)

    // Scroll to the bottom to ensure all elements are visible
    await page.evaluate(scrollToBottom)

    // Check button availability and dismiss any menu overlays
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // Ensure the page has fully loaded by checking for a specific element
    const lastlink = page.getByRole('link', { name: 'Impressum' })
    await expect(lastlink).toBeVisible()
    await expect(lastlink).toBeEnabled()

    // Request a free fabric sample
    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click()
  }
}
