import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '@playwright/test'
import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - Fliegengitter configurator', function () {
  test('Fliegengitter', async function ({ page }) {
    // ******************* Fliegengitter - Farbe Weiß *******************
    await ignoreFreshChat(page)
    await ignoreYoutube(page)
    await page.goto('/insektenschutz/fliegengitter', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // ensure that the page has fully loaded by waiting for one of the last elements in network traffic
    const lastlink = page.getByRole('link', { name: 'Impressum' })
    await expect(lastlink).toBeVisible()
    await expect(lastlink).toBeEnabled()

    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Weiß', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Anthrazit *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Anthrazit/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Anthrazit', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Braun *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Braun/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Braun', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Mooreiche *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Mooreiche/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Mooreiche', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Walnuss *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Walnuss/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Walnuss', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Goldeiche *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Goldeiche/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Goldeiche', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Fliegengitter - Farbe Winchester *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Winchester/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Fliegengitter - Farbe Winchester', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })
})
