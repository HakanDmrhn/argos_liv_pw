import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Zubehör Schiebegardinen' section by loading the page,
 * scrolling to the bottom, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_zubehoer_schiebegardinen
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_zubehoer_schiebegardinen (page) {
  // Load the 'Schiebegardine Magnetclip' page and wait for full load
  await page.goto('/schiebegardine-magnetclip', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom of the page to make all elements visible
  await page.evaluate(scrollToBottom)

  // Verify button availability and dismiss any menu overlay if present
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Set the desired quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('6')

  // Click the cart button to add the item to the cart
  await page.locator('.cart-container > button').click()
}
