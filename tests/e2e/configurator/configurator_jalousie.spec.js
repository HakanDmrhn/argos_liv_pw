import { argosScreenshot } from '@argos-ci/playwright'
//import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - jalousie configurator', function () {
  test.beforeEach(async function ({ page }) {

    await page.goto('/jalousie/jalousie-konfigurator', { waitUntil: 'load' })

    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' })
    await expect(lastlink).toBeVisible()
    await expect(lastlink).toBeEnabled()
  })

  test('Jalousie - 16mm', async function ({ page }) {
    // ******************* Jalousie 16mm *******************
    await page.locator('.blinds-type > ul > :nth-child(1)').click()
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 16mm', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 16mm - Kugelkette - Kunststoff *******************
    await page.locator('.bedienung > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 16mm - Kugelkette - Kunststoff', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 16mm - Kugelkette - Metall *******************
    await page.locator('.bedienung > ul > :nth-child(3)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 16mm - Kugelkette - Metall', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 16mm - In der Fensternische *******************
    await page.locator('div[options-property="befestigung"] > ul').locator(':scope > *').getByText(/In der Fensternische/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 16mm - In der Fensternische', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 16mm - An der Mauer oder Decke *******************
    await page.locator('div[options-property="befestigung"] > ul').locator(':scope > *').getByText(/An der Mauer oder Decke/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 16mm - An der Mauer oder Decke', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })

  test('Jalousie - 25mm', async function ({ page }) {
    // ******************* Jalousie 25mm *******************
    await page.locator('.blinds-type > ul > :nth-child(2)').click()
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)
 

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 25mm', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 25mm - Kugelkette - Kunststoff *******************
    await page.locator('.bedienung > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 25mm - Kugelkette - Kunststoff', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 25mm - Kugelkette - Metall *******************
    await page.locator('.bedienung > ul > :nth-child(3)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 25mm - Kugelkette - Metall', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 25mm - In der Fensternische *******************
    await page.locator('div[options-property="befestigung"] > ul').locator(':scope > *').getByText(/In der Fensternische/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 25mm - In der Fensternische', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 25mm - An der Mauer oder Decke *******************
    await page.locator('div[options-property="befestigung"] > ul').locator(':scope > *').getByText(/An der Mauer oder Decke/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 25mm - An der Mauer oder Decke', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })

  test('Jalousie - 50mm', async function ({ page }) {
    // ******************* Jalousie 50mm *******************
    await page.locator('.blinds-type > ul > :nth-child(3)').click()
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)


    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 50mm', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Jalousie 50mm - Kugelkette - Metall *******************
    await page.locator('.bedienung > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Jalousie 50mm - Kugelkette - Metall', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })
})
