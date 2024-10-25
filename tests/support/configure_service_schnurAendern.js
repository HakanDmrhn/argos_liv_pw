import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

// Data for service configuration
const data = {
  bestellnummer: '200000002',
  breite: '800',
  hoehe: '1200',
  wunschlaenge: '1800',
  produkt: 'Cadena 2002'
}

/**
 * Configures the 'Änderung Schnur' service by loading the page,
 * entering configuration data, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_service_aenderungSchnur
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_service_aenderungSchnur (page) {
  // Load the 'Änderungsauftrag Schnurlänge' page
  await page.goto('/aenderungsauftrag-schnurlaenge', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure all elements are visible
  await page.evaluate(scrollToBottom)

  // Check button availability and ignore any menu overlays
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
  await page.locator('#qty').fill('3') // Set quantity to 3

  // Add the configured item to the cart
  await page.locator('.cart-container > button').click()
}
