import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
import { expect } from '@playwright/test'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Zubehör Rollo' section by loading the page, scrolling to the bottom,
 * selecting size, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_zubehoer_rollo
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_zubehoer_rollo (page) {
  // Ignore any overlay elements (FreshChat, YouTube) that may obstruct interaction
  await ignoreFreshChat(page)
  await ignoreYoutube(page)

  // Load the 'Bedienstab Rollo Dachfenster' page and wait for it to fully load
  await page.goto('/bedienstab-rollo-dachfenster', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure visibility of all elements
  await page.evaluate(scrollToBottom)

  // Verify button availability and dismiss menu overlay if present
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Ensure page has fully loaded by waiting for visibility and enablement of a final network element
  const lastLink = page.getByRole('link', { name: 'Impressum' })
  await expect(lastLink).toBeVisible()
  await expect(lastLink).toBeEnabled()

  // Select the desired size from dropdown options
  await page.locator('.last select').selectOption({ label: '100 cm' })

  // Set the quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('1')

  // Click the add-to-cart button to complete the action
  await page.locator('.cart-container > button').click()
}
