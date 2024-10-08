import { test, expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

export async function configure_fliegengitter (page) {
  // load configurator

  await page.goto('/insektenschutz/fliegengitter', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)
  await page.evaluate(scrollToBottom)
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
  const lastlink = page.getByRole('link', { name: 'Impressum' })
  await expect(lastlink).toBeVisible()
  await expect(lastlink).toBeEnabled()

  // change color
  await page.getByText(/Goldeiche/).first().waitFor() // this is needed since code runs too fast here
  await page.getByText(/Goldeiche/).first().click()

  // input height and weight
  await page.locator('#options_height').fill('2000')
  await page.locator('#options_width').fill('900')

  // input quantity
  await page.locator('#qty').clear()
  await page.locator('#qty').fill('2')

  // go to cart
  await page.locator('.cart-container > button').click()
}
