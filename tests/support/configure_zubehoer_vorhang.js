import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Zubehör Vorhang' section by loading the page,
 * scrolling to the bottom, setting quantity, and navigating to the cart.
 *
 * @async
 * @function configure_zubehoer_vorhang
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_zubehoer_vorhang (page) {
  // Load the 'Zubehör Vorhang' page and wait until fonts are fully loaded
  await page.goto('/gardinenstangen/zylinder2', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom of the page to ensure all elements are in view
  await page.evaluate(scrollToBottom)

  // Check for button availability and ignore menu overlay if necessary
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Set the quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2')

  // Click on the cart button to proceed to the cart
  await page.locator('.cart-container > button').click()
}
