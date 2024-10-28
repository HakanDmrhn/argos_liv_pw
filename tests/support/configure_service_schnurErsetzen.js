import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

// Data for service configuration
const data = {
  bestellnummer: '200000008',
  breite: '1000',
  hoehe: '1500',
  wunschlaenge: '1500',
  produkt: 'Cadena 2001'
}

/**
 * Configures the 'Schnur Ersetzen' service by loading the page,
 * entering configuration data, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_service_schnurErsetzen
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_service_schnurErsetzen (page) {
  // Load the 'Reparaturauftrag Schnur Ersetzen' page
  await page.goto('/reparaturauftrag-schnur-ersetzen', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure all elements are visible
  await page.evaluate(scrollToBottom)

  // Check button availability and dismiss any menu overlays
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Input configuration data
  await page.locator('#configurator-options > dl > :nth-child(2) > .input-box > input').fill(data.bestellnummer) // Bestellnummer
  await page.locator('#configurator-options > dl > :nth-child(5) > .input-box > input').fill(data.produkt) // Produkt
  await page.locator('#configurator-options > dl > :nth-child(8) > .input-box > input').fill(data.breite) // Breite
  await page.locator('#configurator-options > dl > :nth-child(11) > .input-box > input').fill(data.hoehe) // Höhe
  await page.locator('#configurator-options > dl > :nth-child(14) > .input-box > input').fill(data.wunschlaenge) // Wunschlänge

  // Input quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2') // Set quantity to 2

  // Add the configured item to the cart
  await page.locator('.cart-container > button').click()
}
