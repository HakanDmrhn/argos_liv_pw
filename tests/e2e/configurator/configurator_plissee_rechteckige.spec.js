import { argosScreenshot } from '@argos-ci/playwright'
// import { test, expect } from '@playwright/test'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'

const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - plissee configurator rechteckige Fenster', function () {
  test('Plissee - rechteckige Plissees', async function ({ page }) {
    // ******************* rechteckige Fenster *******************

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

    // select weitere Modelle
    await page.locator('div[options-property="plisseetyp"] > div').click()

    // preselected type is VS2
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - VS2', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select VS1
    await page.getByText(new RegExp('^VS1\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - VS1', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select VS3
    await page.getByText(new RegExp('^VS3\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - VS3', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select VS3 SD
    await page.getByText(new RegExp('^VS3 SD\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - VS3 SD', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select Bedienstab
    await page.locator('div[options-property="bedienstab"] > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - Bedienstab', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select F1
    await page.getByText(new RegExp('^F1\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - F1', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select F3
    await page.getByText(new RegExp('^F3\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - F3', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select F5
    await page.getByText(new RegExp('^F5\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - F5', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // --------------------------------------------------------------------------------------------------

    // select FK
    await page.getByText(new RegExp('^FK\\s*$')).first().click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - FK', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })

    // select Pendelsicherung
    await page.locator('div[options-property="pendelsicherung"] > ul > :nth-child(2)').click()
    // take argos screenshot
    await argosScreenshot(page, 'Plissee rechteckig - Pendelsicherung', {
      viewports: [
        'macbook-16', // Use device preset for macbook-16 --> 1536 x 960
        'iphone-6' // Use device preset for iphone-6 --> 375x667
      ]
    })
  })
})
