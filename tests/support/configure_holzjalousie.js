import { add2Cart } from './checkout'
import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the wooden jalousie and adds it to the cart.
 *
 * This function navigates to the wooden jalousie configurator page, waits for the page
 * to fully load, inputs the desired height, width, and quantity, then adds the product to the cart.
 *
 * @async
 * @function configure_holzjalousie
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_holzjalousie (page) {
  // Load the wooden jalousie configurator
  await page.goto('/jalousie/holz-jalousie-konfigurator?lamellengroesse=50mm', { waitUntil: 'load' })
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

  // Change lamellen color to "Natural Mahagoni 6523"
  await page.getByText(/Natural Mahagoni 6523/).first().waitFor() // Ensure the element is present
  await page.getByText(/Natural Mahagoni 6523/).first().click()

  // Input height and width
  await page.locator('#hoehe_in_mm input').fill('1650')
  await page.locator('#breite_in_mm input').fill('1200')

  // Input quantity
  await page.locator('#configurator-price-cart > .add-to-cart input').clear()
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2')

  // Add to cart
  await add2Cart(page)
}
