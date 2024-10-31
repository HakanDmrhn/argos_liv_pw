import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - opened menus', function () {
  test('opened menus - Plissee', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await page.evaluate(scrollToBottom)
    await ignoreMenuContainer(page)

    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

    // Plissee Colors Menu
    await page.locator('#colors > a > span').hover()
    const colorSelectors = ['.white-mi', '.beige-mi', '.grey-mi', '.brown-mi', '.yellow-mi', '.orange-mi', '.red-mi', '.lila-mi', '.blue-mi', '.green-mi', '.black-mi', '.all-colors-mi']
    await Promise.all(colorSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Plissee-Menü - Plissee nach Farben', { fullPage: false, disableHover: false })

    // Plissee Room Menu
    await page.locator('#rooms > a > span').hover()
    const roomSelectors = ['#livingroom-mi', '#bedroom-mi', '#nursery-mi', '#kitchen-mi', '#office-mi', '#bathroom-mi', '#wintergarden-mi']
    await Promise.all(roomSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Plissee-Menü - Plissee nach Räumen', { fullPage: false, disableHover: false })

    // Plissee Characteristics Menu
    await page.locator('#characteristics > a > span').hover()
    const characteristicsSelectors = ['.transparent-mi', '.heat-reflecting-mi', '.screen-mi', '.damproom-mi', '.dimout-mi', '.workplace-mi', '.blackout-mi', '#waben-mi', '#dirt-mi']
    await Promise.all(characteristicsSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Plissee-Menü - Plissee nach Eigenschaften', { fullPage: false, disableHover: false })

    // Plissee Guide Menu
    await page.locator('#guide > a > span').hover()
    const guideSelectors = ['.measure-mi', '.montage-mi', '.plissee-types-mi', '.heat-insulation-mi', '.cloth-attributes-mi', '.contact-mi']
    await Promise.all(guideSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Plissee-Menü - Ratgeber', { fullPage: false, disableHover: false })
  })

  test('opened menus - Rollo', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)
    await page.locator('ol > li:nth-of-type(2) > a').click()
    await page.evaluate(scrollToBottom)

    // Rollo Colors Menu
    await page.locator('#colors > a').hover()
    const colorImages = page.locator('#colors > a img')
    for (let i = 0; i < await colorImages.count(); i++) {
      const image = colorImages.nth(i)
      await image.waitForElementState('visible')
      await page.evaluateHandle(img => img.complete && img.naturalHeight !== 0, image)
    }
    await argosScreenshot(page, 'Rollo-Menü - Rollo nach Farben', { fullPage: false, disableHover: false })

    // Rollo Room Menu
    await page.locator('#rooms > a').hover()
    const roomImages = page.locator('#rooms > a img')
    for (let i = 0; i < await roomImages.count(); i++) {
      const image = roomImages.nth(i)
      await image.waitForElementState('visible')
      await page.evaluateHandle(img => img.complete && img.naturalHeight !== 0, image)
    }
    await argosScreenshot(page, 'Rollo-Menü - Rollo für Räume', { fullPage: false, disableHover: false })

    // Rollo Characteristics Menu
    await page.locator('#characteristics > a > span').hover()
    const characteristicsImages = page.locator('#characteristics > a img')
    for (let i = 0; i < await characteristicsImages.count(); i++) {
      const image = characteristicsImages.nth(i)
      await image.waitForElementState('visible')
      await page.evaluateHandle(img => img.complete && img.naturalHeight !== 0, image)
    }
    await argosScreenshot(page, 'Rollo-Menü - Rollo nach Eigenschaften', { fullPage: false, disableHover: false })

    // Rollo Guide Menu
    await page.locator('#guide > a > span').hover()
    const guideImages = page.locator('#guide > a img')
    for (let i = 0; i < await guideImages.count(); i++) {
      const image = guideImages.nth(i)
      await image.waitForElementState('visible')
      await page.evaluateHandle(img => img.complete && img.naturalHeight !== 0, image)
    }
    await argosScreenshot(page, 'Rollo-Menü - Ratgeber', { fullPage: false, disableHover: false })
  })

  test('opened menus - Doppelrollo', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)
    await page.locator('li.nav-3 span').click()
    await page.evaluate(scrollToBottom)

    // Doppelrollo Colors Menu
    await page.locator('#colors > a').hover()
    const colorImages = page.locator('#colors > a img')
    for (let i = 0; i < await colorImages.count(); i++) {
      const image = colorImages.nth(i)
      await image.waitForElementState('visible')
      await page.evaluateHandle(img => img.complete && img.naturalHeight !== 0, image)
    }
    await argosScreenshot(page, 'Doppelrollo-Menü - Doppelrollo nach Farben', { fullPage: false, disableHover: false })
  })

  test('opened menus - Vorhänge', async function ({ page }) {
    await page.goto('/', {
      waitUntil: 'load'
    })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Vorhänge'
    await page.locator('li.nav-6 span').click()
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await page.evaluate(scrollToBottom)

    // await page.evaluate(scrollToBottom); // --> leads to error on github - unknown reason
    // workaround;
    await page.locator('h1').filter({
      hasText: 'Vorhänge: Der Klassiker der Fensterdekoration'
    }).waitFor()

    // -------------------------- VORHÄNGE ----------------------------------
    const vorhaenge = page.locator('#vorhaenge-sub-menu li:nth-of-type(1)')
    await vorhaenge.hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const vorhaenge_colors of await vorhaenge.locator('div.menu-wrapper-colours a').all()) {
      await vorhaenge_colors.waitFor()
    }
    for (const vorhaenge_attributes of await vorhaenge.locator('div.menu-wrapper-attributes a').all()) {
      await vorhaenge_attributes.waitFor()
    }
    for (const vorhaenge_rooms of await vorhaenge.locator('div.menu-wrapper-rooms a').all()) {
      await vorhaenge_rooms.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Vorhänge-Menü - Vorhänge', {
      fullPage: false,
      disableHover: false
    })

    // -------------------------- GARDINEN ----------------------------------
    const gardinen = page.locator('#vorhaenge-sub-menu li:nth-of-type(2)')
    await gardinen.hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const gardinen_colors of await gardinen.locator('div.menu-wrapper-colours a').all()) {
      await gardinen_colors.waitFor()
    }
    for (const gardinen_attributes of await gardinen.locator('div.menu-wrapper-attributes a').all()) {
      await gardinen_attributes.waitFor()
    }
    for (const gardinen_rooms of await gardinen.locator('div.menu-wrapper-rooms a').all()) {
      await gardinen_rooms.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Vorhänge-Menü - Gardinen', {
      fullPage: false,
      disableHover: false
    })

    // -------------------------- ÖSENSCHAL ----------------------------------
    const oesenschal = page.locator('#vorhaenge-sub-menu li:nth-of-type(3)')
    await oesenschal.hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const oesenschal_colors of await oesenschal.locator('div.menu-wrapper-colours a').all()) {
      await oesenschal_colors.waitFor()
    }
    for (const oesenschal_attributes of await oesenschal.locator('div.menu-wrapper-attributes a').all()) {
      await oesenschal_attributes.waitFor()
    }
    for (const oesenschal_rooms of await oesenschal.locator('div.menu-wrapper-rooms a').all()) {
      await oesenschal_rooms.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Vorhänge-Menü - Ösenschal', {
      fullPage: false,
      disableHover: false
    })

    // -------------------------- DEKOSCHAL ----------------------------------
    const dekoschal = page.locator('#vorhaenge-sub-menu li:nth-of-type(4)')
    await dekoschal.hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const dekoschal_colors of await dekoschal.locator('div.menu-wrapper-colours a').all()) {
      await dekoschal_colors.waitFor()
    }
    for (const dekoschal_attributes of await dekoschal.locator('div.menu-wrapper-attributes a').all()) {
      await dekoschal_attributes.waitFor()
    }
    for (const dekoschal_rooms of await dekoschal.locator('div.menu-wrapper-rooms a').all()) {
      await dekoschal_rooms.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Vorhänge-Menü - Dekoschal', {
      fullPage: false,
      disableHover: false
    })

    // -------------------------- ZUBEHÖR -----------------------------------
    const zubehoer = page.locator('#vorhaenge-sub-menu li:nth-of-type(7)')
    await zubehoer.hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const zubehoer_element of await zubehoer.locator('div.menu-wrapper-colours a').all()) {
      await zubehoer_element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Vorhänge-Menü - Zubehör', {
      fullPage: false,
      disableHover: false
    })
  })

  test('opened menus - Schiebegardinen', async function ({ page }) {
    // Load main page
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // Go to tab 'Schiebegardinen'
    await page.locator('li.nav-7 span').click()
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)

    // Hover over Colors Menu
    await page.locator('#colors > a > span').hover()

    // Wait for all color elements to be visible
    const colorSelectors = [
      '.white-mi',
      '.beige-mi',
      '.grey-mi',
      '.brown-mi',
      '.yellow-mi',
      '.orange-mi',
      '.red-mi',
      '.blue-mi',
      '.green-mi',
      '.black-mi',
      '.all-colors-mi'
    ]
    await Promise.all(colorSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))

    // Take Argos screenshot
    await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Farben', { fullPage: false, disableHover: false })

    // Hover over Characteristics Menu
    await page.locator('#characteristics > a > span').hover()

    // Wait for all characteristics elements to be visible
    const characteristicsSelectors = ['.transparent-mi', '.blickdicht-mi', '.verdunklung-mi']
    await Promise.all(characteristicsSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))

    // Take Argos screenshot
    await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Eigenschaften', {
      fullPage: false,
      disableHover: false
    })
  })

  test('opened menus - Raffrollos', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)
    await page.locator('ol > li:nth-of-type(8) span').click() // Adjust the selector for Raffrollos menu if needed
    await page.evaluate(scrollToBottom)

    // Raffrollo Colors Menu
    await page.locator('#colors > a > span').hover()
    const colorSelectors = ['.white-mi', '.beige-mi', '.grey-mi', '.brown-mi', '.yellow-mi', '.orange-mi', '.red-mi', '.blue-mi', '.green-mi', '.black-mi', '.all-colors-mi']
    await Promise.all(colorSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Raffrollos-Menü - Raffrollos nach Farben', { fullPage: false, disableHover: false })

    // Raffrollo Room Menu
    await page.locator('#rooms > a > span').hover()
    const roomSelectors = ['.raffrollo-wohnzimmer-mi', '.raffrollo-schlafzimmer-mi', '.raffrollo-kueche-mi', '.raffrollo-kinderzimmer-mi']
    await Promise.all(roomSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Raffrollos-Menü - Raffrollos für Räume', { fullPage: false, disableHover: false })

    // Raffrollo Characteristics Menu
    await page.locator('#characteristics > a > span').hover()
    const characteristicsSelectors = ['.transparent-mi', '.blickdicht-mi', '.verdunklung-mi']
    await Promise.all(characteristicsSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Raffrollos-Menü - Raffrollos nach Eigenschaften', { fullPage: false, disableHover: false })

    // Raffrollo Guide Menu
    await page.locator('#guide > a > span').hover()
    const guideSelectors = ['.measure-mi', '.montage-mi', '.contact-mi']
    await Promise.all(guideSelectors.map(selector => page.waitForSelector(selector, { state: 'visible' })))
    await argosScreenshot(page, 'Raffrollos-Menü - Ratgeber', { fullPage: false, disableHover: false })
  })
})
