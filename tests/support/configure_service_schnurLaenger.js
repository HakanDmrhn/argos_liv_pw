import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

// Data for service configuration
const data = {
  produkt: 'Broza 1889',
  bestellnummer: '200000002',
  schienenfarbe: 'weiß',
  breite: '1500',
  hoehe: '1800',
  wunschlaenge: '2300',
  wunschseite: 'beidseitig',
  anmerkung: 'Bitte die Schnur in angegebener Länge ändern. Lieben Dank! Meier'
}

/**
 * Configures the 'Service für längere Schnur' by loading the page,
 * entering configuration data, setting quantity, and adding the item to the cart.
 *
 * @async
 * @function configure_service_laengereSchnur
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function configure_service_laengereSchnur (page) {
  // Load the 'Zusatzauftrag für längere Führungsschnüre' page
  await page.goto('/zusatzauftrag-laengere-fuehrungsschnuere', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)

  // Scroll to the bottom to ensure all elements are visible
  await page.evaluate(scrollToBottom)

  // Check button availability and ignore any menu overlay
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // Input configuration data
  await page.locator('#configurator-options > dl > :nth-child(2) > .input-box > input').fill(data.produkt) // Produkt
  await page.locator('#configurator-options > dl > :nth-child(5) > .input-box > input').fill(data.schienenfarbe) // Schienenfarbe
  await page.locator('#configurator-options > dl > :nth-child(8) > .input-box > input').fill(data.breite) // Breite
  await page.locator('#configurator-options > dl > :nth-child(11) > .input-box > input').fill(data.hoehe) // Höhe
  await page.locator('#configurator-options > dl > :nth-child(14) > .input-box > input').fill(data.wunschlaenge) // Wunschlänge
  await page.selectOption('#configurator-options > dl > :nth-child(16) > .input-box > select', data.wunschseite) // Wunschseite
  await page.locator('#configurator-options > dl > .last > .input-box > textarea').fill(data.anmerkung) // Anmerkung

  // Input quantity of the item
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('3') // Set quantity to 3

  // Add the configured item to the cart
  await page.locator('.cart-container > button').click()
}
