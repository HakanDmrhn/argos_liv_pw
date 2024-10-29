import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the insect protection roller and adds it to the cart.
 *
 * This function navigates to the insect protection roller configurator page, waits for the page
 * to fully load, inputs the desired height, width, and quantity, then adds the product to the cart.
 *
 * @async
 * @function configure_insektenrollo
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_insektenrollo (page) {
  // Load the insect protection roller configurator
  await page.goto('/insektenschutz/insektenschutz-rollo', { waitUntil: 'load' })
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

  // Change color to "Eiche"
  await page.getByText(/Eiche/).first().waitFor() // Ensure the element is present
  await page.getByText(/Eiche/).first().click()

  // Input height and width
  await page.locator('#options_height').fill('2050')
  await page.locator('#options_width').fill('1400')

  // Input quantity
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2')

  // Go to cart
  await page.locator('.cart-container > button').click()
}
