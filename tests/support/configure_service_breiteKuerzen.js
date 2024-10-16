import { test, expect } from '../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

const data =
{
  bestellnummer: '200000001',
  breite: '1500',
  hoehe: '2200',
  kuerzung: '1200',
  produkt: 'Ambience 1357'
}

export async function configure_service_breiteKuerzen (page) {
  await page.goto('/aenderungsauftrag-breite', { waitUntil: 'load' })
  await page.waitForFunction(() => document.fonts.ready)
  await page.evaluate(scrollToBottom)
  await checkButtonAvailability(page)
  await ignoreMenuContainer(page)

  const lastlink = page.getByRole('link', { name: 'Impressum' })
  await expect(lastlink).toBeVisible()
  await expect(lastlink).toBeEnabled()
  await page.waitForFunction(() => document.fonts.ready)

  // input of data
  await page.locator('#configurator-options > dl > :nth-child(2) > .input-box > input').fill(data.bestellnummer)
  await page.locator('#configurator-options > dl > :nth-child(5) > .input-box > input').fill(data.produkt)
  await page.locator('#configurator-options > dl > :nth-child(8) > .input-box > input').fill(data.breite)
  await page.locator('#configurator-options > dl > :nth-child(11) > .input-box > input').fill(data.hoehe)
  await page.locator('#configurator-options > dl > :nth-child(14) > .input-box > input').fill(data.kuerzung)

  // input quantity
  await page.locator('#qty').clear(); await page.locator('#qty').fill('2')

  // add to cart
  await page.locator('.cart-container > button').click()
}
