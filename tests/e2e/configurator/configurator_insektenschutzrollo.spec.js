import { argosScreenshot } from '@argos-ci/playwright'
//import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - Insektenschutzrollo configurator', function () {
  test('Insektenschutzrollo', async function ({ page }) {
    // ******************* Insektenschutzrollo - Hauswand *******************

    await page.goto('/insektenschutz/insektenschutz-rollo', { waitUntil: 'load' })
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
    await argosScreenshot(page, 'Insektenschutzrollo - Montage Hauswand', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Mauer *******************
    await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Mauer', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Fensterrahmen *******************
    await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Fensterrahmen', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Klebemontage *******************
    await page.locator('#configurator-options > :nth-child(3) > ul > :nth-child(3)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Klebemontage', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Farbe Anthrazit *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Anthrazit/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Farbe Anthrazit', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Farbe Braun *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Braun/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Farbe Braun', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Farbe Eiche *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Eiche/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Farbe Eiche', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Farbe Nuss *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Nuss/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Farbe Nuss', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // ******************* Insektenschutzrollo - Farbe Winchester *******************
    await page.locator('#options-list-color').locator(':scope > *').getByText(/Winchester/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Insektenschutzrollo - Farbe Winchester', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })
})
