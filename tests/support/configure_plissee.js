import { add2Cart } from './checkout'
import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Plissee' product by loading the page,
 * entering height and width, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_plissee
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_plissee (page) {
  // Load the 'Plissee' product configurator page
  await page.goto('/plissee/lindura-1583', { waitUntil: 'load' })
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

  // Click on the option to configure the product
  await page.getByText(/Plissee auf Maß konfigurieren/).first().click()

  // Input height and width
  await page.locator('#hoehe input').fill('1500') // Height in mm
  await page.locator('#breite input').fill('1500') // Width in mm

  // Input quantity of the item
  await page.locator('#configurator-price-cart > .add-to-cart input').clear()
  await page.locator('#configurator-price-cart > .add-to-cart input').fill('2') // Set quantity to 2

  // Add the configured item to the cart
  await add2Cart(page)
}
