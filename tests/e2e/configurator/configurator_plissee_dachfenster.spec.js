import { argosScreenshot } from '@argos-ci/playwright'
// import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - plissee configurator dachfenster', function () {
  test('Plissee - Dachfensterplissees', async function ({ page }) {
    await page.goto('/plissee/plissee-konfigurator', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // ******************* Dachfensterplissees *******************
    // change to tab Dachfenster
    await page.locator('.tabs > :nth-child(2)').click()
    await page.evaluate(scrollToBottom)
    await ignoreMenuContainer(page)

    // preselected type is DF20 genormt
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - DF20 genormt', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // change to ungenormt
    await page.getByText(/Maße des Dachfenster manuell eingeben/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - DF20 ungenormt', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // reset to genormt
    await page.getByText(/Dachfenster auswählen/).first().click()

    // --------------------------------------------------------------------------------------------------

    // select DF20 Comfort
    await page.getByText(new RegExp('^DF20 Comfort\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - DF20 Comfort genormt', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // change to ungenormt
    await page.getByText(/Maße des Dachfenster manuell eingeben/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - DF20 Comfort ungenormt', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select different falz types

    // 'Gerader Falz' is preselected
    await page.getByText(/Gerader Falz/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - Gerader Falz', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // select 'Schräger Falz'
    await page.getByText(/Schräger Falz/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - Schräger Falz', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // select 'Schräger Falz mit Schattenfuge'
    await page.getByText(/Schräger Falz mit Schattenfuge/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - Schräger Falz mit Schattenfuge', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // select 'Schräger Falz mit Aufsatz vor Glas'
    await page.getByText(/Schräger Falz mit Aufsatz vor Glas/).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - Schräger Falz mit Aufsatz vor Glas', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select Bedienstab
    await page.locator('div[options-property="bedienstabComfort"] > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee Dachfenster - Bedienstab', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })
})
