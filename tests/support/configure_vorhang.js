import { add2Cart } from './checkout'
import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Vorhang' section by loading the page,
 * scrolling to the bottom, selecting color, entering dimensions,
 * setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_vorhang
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_vorhang (page) {
  // Load the 'Dekoschal Cervo' page and wait for it to fully load
  await page.goto('/vorhaenge/dekoschal/cervo', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure all elements are visible
  await page.evaluate(scrollToBottom)

  // Check button availability and dismiss any menu overlay
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Ensure the page has fully loaded by waiting for a specific element in the network traffic
  const lastLink = page.getByRole('link', { name: 'Impressum' })
  await expect(lastLink).toBeVisible()
  await expect(lastLink).toBeEnabled()

  // Change color selection to 'Rot'
  await page.locator('.color-title').getByText(/Rot/).first().waitFor() // Wait for the element to be ready
  await page.locator('.color-title').getByText(/Rot/).first().click()

  // Input dimensions for height and width
  await page.locator('#breite input').fill('200') // Set width to 200
  await page.locator('#hoehe input').fill('280') // Set height to 280

  // Input quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2') // Set quantity to 2

  // Add the configured item to the cart
  await add2Cart(page)
}
