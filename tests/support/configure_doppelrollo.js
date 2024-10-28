import { add2Cart } from './checkout'
import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the double roller blind and adds it to the cart.
 *
 * This function navigates to the double roller blind configurator page, waits for the page
 * to fully load, inputs the desired height and width, and then adds the product to the cart.
 *
 * @async
 * @function configure_doppelrollo
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_doppelrollo (page) {
  // Load the double roller configurator
  await page.goto('/doppelrollo/rayure-5014', { waitUntil: 'load' })
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

  // Click on the configuration button for double roller
  await page.getByText(/Doppelrollo auf Maß konfigurieren/).first().click()

  // Select roller type
  await page.getByText(/Doppelrollo mit Kassette/).first().waitFor() // Wait for the element to be present
  await page.getByText(/Doppelrollo mit Kassette/).first().click()

  // Input height and width
  await page.locator('#hoehe input').fill('1500')
  await page.locator('#breite input').fill('1000')

  // Input quantity
  await page.locator('#configurator-price-cart > .add-to-cart input').clear()
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2')

  // Add to cart
  await add2Cart(page)
}
