import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the fly screen and adds it to the cart.
 *
 * This function navigates to the fly screen configurator page, waits for the page
 * to fully load, inputs the desired height, width, and quantity, then adds the product to the cart.
 *
 * @async
 * @function configure_fliegengitter
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_fliegengitter (page) {
  // Load the fly screen configurator
  await page.goto('/insektenschutz/fliegengitter', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure all elements are loaded
  await page.evaluate(scrollToBottom)

  // Check button availability and dismiss any menu overlays
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Ensure the page has fully loaded by checking for the Impressum link
  const lastlink = page.getByRole('link', { name: 'Impressum' })
  await expect(lastlink).toBeVisible()
  await expect(lastlink).toBeEnabled()

  // Change color to "Goldeiche"
  await page.getByText(/Goldeiche/).first().waitFor() // Ensure the element is present
  await page.getByText(/Goldeiche/).first().click()

  // Input height and width
  await page.locator('#options_height').fill('2000')
  await page.locator('#options_width').fill('900')

  // Input quantity
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2')

  // Go to cart
  await page.locator('.cart-container > button').click()
}
