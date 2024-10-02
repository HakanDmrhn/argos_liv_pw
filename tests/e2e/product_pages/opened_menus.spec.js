import { argosScreenshot } from '@argos-ci/playwright'
import { test, expect } from '../../fixtures/youtube_freshchat_blocking_fixture.js'
import { ignoreMenuContainer, checkButtonAvailability } from '../../support/helpers'
const scrollToBottom = require('scroll-to-bottomjs')

test.describe('Integration test with visual testing - opened menus', function () {
  test('opened menus - Plissee', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // ensure that the page has fully loaded by waiting for the logo c
    const livoneoLogo = await page.getByRole('img', { name: 'Plissee und Sonnenschutz bei Livoneo®' })
    await expect(livoneoLogo).toBeVisible()
    await livoneoLogo.hover()
    await page.mouse.move(0, 0)

// Ensure the images in the menu are visible before taking a screenshot
await page.locator('#colors > a > span').hover();

// Iterate through all menu images and ensure each is visible
const menuItems = await page.locator('#colors > a img');  // assuming the images are inside the anchor tags
const count = await menuItems.count();

for (let i = 0; i < count; i++) {
  await expect(menuItems.nth(i)).toBeVisible();  // ensure each image is visible
}

// Take Argos screenshot
await argosScreenshot(page, 'Plissee-Menü - Plissee nach Farben', {
  fullPage: false,
  disableHover: false
});


    await page.locator('#rooms > a > span').hover()

// Iterate through all menu images and ensure each is visible
const menuItemsRooms = await page.locator('#rooms > a img');  // assuming the images are inside the anchor tags
const countRooms = await menuItemsRooms.count();

for (let i = 0; i < countRooms; i++) {
  await expect(menuItemsRooms.nth(i)).toBeVisible();  // ensure each image is visible
}

// Take Argos screenshot
await argosScreenshot(page, 'Plissee-Menü - Plissee nach Räumen', {
  fullPage: false,
  disableHover: false
});


    

    await page.locator('#characteristics > a > span').hover()

// Iterate through all menu images and ensure each is visible
const menuItemsCharacteristics = await page.locator('#rooms > a img');  // assuming the images are inside the anchor tags
const countCharacteristics = await menuItemsCharacteristics.count();

for (let i = 0; i < countCharacteristics; i++) {
  await expect(menuItemsCharacteristics.nth(i)).toBeVisible();  // ensure each image is visible
}

// Take Argos screenshot
await argosScreenshot(page, 'Plissee-Menü - Plissee nach Eigenschaften', {
  fullPage: false,
  disableHover: false
});



    await page.locator('#guide > a > span').hover()

// Iterate through all menu images and ensure each is visible
const menuItemsGuide = await page.locator('#rooms > a img');  // assuming the images are inside the anchor tags
const countGuide = await menuItemsGuide.count();

for (let i = 0; i < countGuide; i++) {
  await expect(menuItemsGuide.nth(i)).toBeVisible();  // ensure each image is visible
}

    // take argos screenshot
    await argosScreenshot(page, 'Plissee-Menü - Ratgeber', {
      fullPage: false,
      disableHover: false
    })
  })




  test('opened menus - Rollo', async function ({ page }) {

    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Rollos'
    await page.locator('ol > li:nth-of-type(2) > a').click()
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)


    await page.locator('#colors > a').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#colors > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Rollo-Menü - Rollo nach Farben', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#rooms > a').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#rooms > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Rollo-Menü - Rollo für Räume', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#characteristics > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#characteristics > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Rollo-Menü - Rollo nach Eigenschaften', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#guide > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#guide > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Rollo-Menü - Ratgeber', {
      fullPage: false,
      disableHover: false
    })
  })

  test('opened menus - Doppelrollo', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Doppelrollo'
    await page.locator('li.nav-3 span').click()
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)
    await page.locator('#colors > a').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#colors > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Doppelrollo-Menü - Doppelrollo nach Farben', {
      fullPage: false,
      disableHover: false
    })
  })

  test('opened menus - Vorhänge', async function ({ page }) {
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Vorhänge'
    await page.locator('li.nav-6 span').click()
    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)

    // await page.evaluate(scrollToBottom); // --> leads to error on github - unknown reason
    // workaround;
    await page.locator('h1').filter({ hasText: 'Vorhänge: Der Klassiker der Fensterdekoration' }).waitFor()

    // -------------------------- VORHÄNGE ----------------------------------
    // ----------------------------------------------------------------------
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
    // ----------------------------------------------------------------------
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
    // ----------------------------------------------------------------------
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
    // ----------------------------------------------------------------------
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
    // ----------------------------------------------------------------------
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
    // load main page
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Schiebegardinen'
    await page.locator('li.nav-7 span').click()

    await page.evaluate(scrollToBottom)
    await page.waitForFunction(() => document.fonts.ready)

    await page.locator('#colors > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('.menu-wrapper-colours > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Farben', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#characteristics > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('.menu-wrapper-attributes > a').all()) {
      await element.waitFor()
    }
    // take argos screenshot
    await argosScreenshot(page, 'Schiebegardinen-Menü - Schiebegardinen nach Eigenschaften', {
      fullPage: false,
      disableHover: false
    })
  })

  test('opened menus - Raffrollos', async function ({ page }) {
    // load main page
    await page.goto('/', { waitUntil: 'load' })
    await page.waitForFunction(() => document.fonts.ready)
    await page.evaluate(scrollToBottom)
    await checkButtonAvailability(page)
    await ignoreMenuContainer(page)

    // go to tab 'Raffrollos'
    await page.locator('ol > li:nth-of-type(8) span').click()
    await page.waitForFunction(() => document.fonts.ready)
    await checkButtonAvailability(page)
    await page.evaluate(scrollToBottom)
    await ignoreMenuContainer(page)

    await page.locator('#colors > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('.menu-wrapper-colours > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo nach Farben', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#rooms > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#rooms.menu-wrapper > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo für Räume', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#characteristics > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#characteristics.menu-wrapper > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Raffrollo-Menü - Raffrollo nach Eigenschaften', {
      fullPage: false,
      disableHover: false
    })

    await page.locator('#guide > a > span').hover()

    // iterate through all menu images and check if visible before taking screenshot
    for (const element of await page.locator('#guide.menu-wrapper > a').all()) {
      await element.waitFor()
    }

    // take argos screenshot
    await argosScreenshot(page, 'Raffrollo-Menü - Ratgeber', {
      fullPage: false,
      disableHover: false
    })
  })
})
