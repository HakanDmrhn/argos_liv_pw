import { expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { argosScreenshot } from '@argos-ci/playwright'
const scrollToBottom = require('scroll-to-bottomjs')

// User and address data
const data = {
  login: 'guest',
  prefix: 'geschaeftskunde',
  companyName: 'Test GmbH',
  vatID: 'ATU33803701',
  prefixBusiness: 'Frau',
  firstName: 'Maria',
  lastName: 'Magdalena',
  email: 'maria@delphinus-test.de',
  street: 'Karlsplatz 40',
  postalCode: '1040',
  city: 'Wien',
  state: 'Österreich',
  phone: '222219',
  shipping: 'new',
  prefix2: 'geschaeftskunde',
  companyName2: 'Chaimag Ltd',
  prefixBusiness2: 'Herr',
  firstName2: 'Mirco',
  lastName2: 'Yanar',
  street2: '104 Bdin Str., Büro 12',
  postalCode2: '1234',
  city2: 'Sofia',
  state2: 'Bulgarien',
  phone2: '225588',
  versandkosten: '16,81', // 20,00 / 119 * 100
  payment: 'bankpayment'
}

/**
 * Adds the current product to the cart.
 *
 * @async
 * @function add2Cart
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function add2Cart (page) {
  await page.locator('#configurator-price-cart > .add-to-cart button').click()
}

/**
 * Performs the checkout process, filling in billing and shipping information.
 *
 * @async
 * @function checkOut
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function checkOut (page) {
  // ----------------------- CHECK URL OF CART --------------------------------//
  await expect(page).toHaveURL(new RegExp('/checkout/cart'))
  await page.waitForFunction(() => document.fonts.ready)

  // Take a screenshot of the cart
  await argosScreenshot(page, 'Alle Produkte im Warenkorb', {
    viewports: ['macbook-16', 'iphone-6']
  })

  // Proceed to checkout
  await page.getByText(/zur Kasse gehen/).first().click()
  await page.waitForFunction(() => document.fonts.ready)
  await page.evaluate(scrollToBottom)

  // ----------------------- CHECK URL OF CHECKOUT ----------------------------//
  await expect(page).toHaveURL(new RegExp('/checkout/onepage'))

  // Set billing address information
  await setBillingData(page, data)
  await page.waitForFunction(() => document.fonts.ready)

  // Take a screenshot of billing information
  await argosScreenshot(page, 'checkout - Rechnungsinformation', {
    viewports: ['macbook-16', 'iphone-6']
  })

  // Select 'An andere Adresse verschicken' and proceed
  await page.locator('input[title="An andere Adresse verschicken"]').check()
  await page.locator('#billing-buttons-container > button[title="Weiter"]').click()
  await page.waitForFunction(() => document.fonts.ready)

  // ------------------------------- CHECK REQUEST ----------------------------//
  await checkResponse(page, '/checkout/onepage/saveBilling')

  // Set shipping address information
  await setShippingData(page, data)
  await page.waitForFunction(() => document.fonts.ready)

  // Take a screenshot of shipping information
  await argosScreenshot(page, 'checkout - Versandinformation', {
    viewports: ['macbook-16', 'iphone-6']
  })

  // Click 'Weiter'
  await page.locator('#shipping-buttons-container button').click()
  await page.waitForFunction(() => document.fonts.ready)

  // ------------------------------- CHECK REQUEST ----------------------------//
  await checkResponse(page, '/checkout/onepage/saveShipping')

  await page.waitForFunction(() => document.fonts.ready)
  await page.evaluate(scrollToBottom)

  // Take a screenshot of shipping costs
  await argosScreenshot(page, 'checkout - Versandkosten', {
    viewports: ['macbook-16', 'iphone-6']
  })

  // Click "Weiter" @Versandkosten
  await expect(page.locator('#co-shipping-method-form > .buttons-set > .button')).toBeVisible()
  await page.locator('#co-shipping-method-form > .buttons-set > .button').click()
  await page.waitForFunction(() => document.fonts.ready)

  // ------------------------------- CHECK REQUEST ----------------------------//
  await checkResponse(page, '/checkout/onepage/saveShippingMethod')

  // Wait for payment options to load
  await waitForPaymentOptions(page)

  // Take a screenshot of payment information
  await argosScreenshot(page, 'checkout - Zahlungsinformation', {
    viewports: ['macbook-16', 'iphone-6']
  })

  // Click "Weiter"
  await page.locator('#payment-buttons-container button').click()
  await page.waitForFunction(() => document.fonts.ready)

  // ------------------------------- CHECK REQUEST ----------------------------//
  await checkResponse(page, '/checkout/onepage/savePayment')

  // Wait for PayPal button to load
  await page.locator('iframe.component-frame.visible').waitFor()

  // Take a screenshot of order summary
  await argosScreenshot(page, 'checkout - Bestellübersicht', {
    viewports: ['macbook-16', 'iphone-6']
  })
}

/**
 * Empties the cart, taking screenshots before and after.
 *
 * @async
 * @function emptyCart
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
export async function emptyCart (page) {
  await page.locator('.smallcartdiv').click()
  await page.waitForFunction(() => document.fonts.ready)
  await page.evaluate(scrollToBottom)

  await expect(page).toHaveURL(new RegExp('/checkout/cart'))

  // Take a screenshot of the cart
  await argosScreenshot(page, 'checkout - Warenkorb leeren', {
    viewports: ['macbook-16', 'iphone-6']
  })

  await deleteProducts(page)

  // Take a screenshot of the emptied cart
  await argosScreenshot(page, 'checkout - Warenkorb geleert', {
    viewports: ['macbook-16', 'iphone-6']
  })
}

/**
 * Sets billing address information.
 *
 * @async
 * @function setBillingData
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 * @param {Object} data - The data object containing billing information.
 */
async function setBillingData (page, {
  companyName,
  vatID,
  firstName,
  lastName,
  email,
  street,
  postalCode,
  city,
  phone,
  state
}) {
  await page.locator('#billing_anrede_geschaeftskunde').click()
  await page.locator('[id="billing:company"]').fill(companyName)
  await page.locator('[id="billing:vat_id"]').fill(vatID)
  await page.locator('.anrede_frau[name="billing\\[prefix\\]"]').check()
  await page.locator('[id="billing:firstname"]').fill(firstName)
  await page.locator('[id="billing:lastname"]').fill(lastName)
  await page.locator('[id="billing:email"]').fill(email)
  await page.locator('[id="billing:street1"]').fill(street)
  await page.locator('[id="billing:postcode"]').fill(postalCode)
  await page.locator('[id="billing:city"]').fill(city)
  await page.locator('[id="billing:telephone"]').fill(phone)
  await page.selectOption('[id="billing:country_id"]', state)
}

/**
 * Sets shipping address information.
 *
 * @async
 * @function setShippingData
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 * @param {Object} data - The data object containing shipping information.
 */
async function setShippingData (page, {
  companyName2,
  vatID_2,
  firstName2,
  lastName2,
  street2,
  postalCode2,
  city2,
  phone2,
  state2
}) {
  await page.locator('#shipping_anrede_geschaeftskunde').click()
  await page.locator('[id="shipping:company"]').fill(companyName2)
  // Uncomment if VAT ID is needed: await page.locator('[id="shipping:vat_id"]').fill(vatID2);
  await page.locator('.anrede_herr[name="shipping\\[prefix\\]"]').check()
  await page.locator('[id="shipping:firstname"]').fill(firstName2)
  await page.locator('[id="shipping:lastname"]').fill(lastName2)
  await page.locator('[id="shipping:street1"]').fill(street2)
  await page.locator('[id="shipping:postcode"]').fill(postalCode2)
  await page.locator('[id="shipping:city"]').fill(city2)
  await page.locator('[id="shipping:telephone"]').fill(phone2)
  await page.selectOption('[id="shipping:country_id"]', state2)
}

/**
 * Deletes products from the cart.
 *
 * @async
 * @function deleteProducts
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
async function deleteProducts (page) {
  await page.locator('.smallcartdiv').click()
  await page.locator('.remove-item').first().waitFor()

  while (await page.isVisible('.remove-item')) {
    await page.locator('.remove-item').first().click()
    await page.waitForTimeout(500)
  }
}

/**
 * Waits for payment options to load.
 *
 * @async
 * @function waitForPaymentOptions
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 */
async function waitForPaymentOptions (page) {
  await page.locator('dt[class="ppp bankpayment"] img').waitFor()
  await page.locator('dt[class="ppp paypal ppp-selected"] img').waitFor()
  await page.locator('dt[class="ppp card"] img').waitFor()
  // await page.locator('dt[class="ppp sofort"] img').waitFor(); // Uncomment if needed
}

/**
 * Checks the response for a specific URL during the checkout process.
 *
 * @async
 * @function checkResponse
 * @param {import('playwright').Page} page - The Playwright page instance for browser interaction.
 * @param {string} urlPart - The URL part to check for in the response.
 */
async function checkResponse (page, urlPart) {
  await Promise.all([
    page.waitForResponse(response =>
      response.url().includes(urlPart) && response.status() === 200,
    { timeout: 2000 }
    ).then(() => console.log(`RESPONSE RECEIVED - ${urlPart}`))
  ])
}
