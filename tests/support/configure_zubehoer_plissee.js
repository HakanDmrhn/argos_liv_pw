import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

/**
 * Configures the 'Zubehör Plissee' section by loading the page,
 * scrolling to the bottom, selecting color, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_zubehoer_plissee
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_zubehoer_plissee (page) {
  // Load the 'Sockelplatten' page and wait for it to fully load
  await page.goto('/sockelplatten', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure visibility of all elements
  await page.evaluate(scrollToBottom)

  // Check button availability and ignore any menu overlay
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Uncomment this block if you want to wait for specific JavaScript files to load
  // await Promise.all([
  //     page.waitForResponse(response =>
  //         response.url().includes('/skin/frontend/delphinus/default/js_minify/')
  //         && response.status() === 200, { timeout: 3000 })
  // ]);

  // Workaround: Wait for 2 seconds to ensure all necessary scripts are loaded
  // await page.waitForTimeout(2000);

  // Change the color selection
  await page.locator('.input-box select').selectOption({ label: 'weiß' })

  // Set the quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('4')

  // Click the add-to-cart button to complete the action
  await page.locator('.cart-container > button').click()
}
