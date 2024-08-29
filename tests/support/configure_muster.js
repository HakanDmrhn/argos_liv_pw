import { ignoreFreshChat, ignoreYoutube, ignoreMenuContainer, checkButtonAvailability } from '../support/helpers';

let scrollToBottom = require("scroll-to-bottomjs");

export async function configure_muster(page) {

    //muster doppelrollo
    await page.goto('/doppelrollo/rayure-5007', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

    //muster plissee
    await page.goto('/plissee/poesia-1824', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

    //muster raffrollo
    await page.goto('/raffrollo/corsia-9135', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

    //muster rollo
    await page.goto('/rollo/blackout-unicolor-3110', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

    //muster schiebegardine
    await page.goto('/schiebegardinen/hilko-7316', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

    //muster vorhang
    await page.goto('/vorhaenge/dekoschal/bosco', { waitUntil: 'load' });
    await page.waitForFunction(() => document.fonts.ready);
    await page.evaluate(scrollToBottom);
    await checkButtonAvailability(page);
    await ignoreMenuContainer(page);
    await ignoreFreshChat(page);
    await ignoreYoutube(page);

    await page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

  }