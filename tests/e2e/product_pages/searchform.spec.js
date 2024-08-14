import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat, ignoreYoutube } from '../../support/helpers';
var data = require("../../fixtures/product_pages_zubehoer.json");
var pages = data.URLS;
let scrollToBottom = require("scroll-to-bottomjs");


// Define search terms for each page
const productSearchTerms = {
    "/klemmtraeger": "klemmtraeger",
    "/gardinenstangen/kegel": "kegel",
    "/aenderungsauftrag-breite": "breite",
    "/schiebegardinen/mica-7342": "mica",
    "/rollo/arkona-3667": "arkona",
    "/raffrollo/sunta-9043": "sunta",
    "/plissee/blackout-classic-1102": "blackout",
    "/insektenschutz/fliegengitter": "fliegengitter",
    "/plissee-kleben": "kleben",
    "/doppelrollo/remsa-5057": "remsa",
    "plissee": "perlex",
    "/": "ozean",
    "/": "1=1"
};


test.describe('Integration test with visual testing - search function', function () {
    test.describe.configure({ retries: 2 });

    Object.entries(productSearchTerms).forEach(([link, searchTerm]) => {

        test(`Load page: ${link} - Enter search term "${searchTerm}" and take Argos snapshot`, async function ({ page }) {
            // visit url
            await page.goto(link, { waitUntil: 'load' });
            await page.waitForFunction(() => document.fonts.ready);

            // Hier wird die Seite nach unten gescrollt um zu gewährleisten, dass alle Bilder geladen wurden
            // await page.evaluate(() => {
            //     window.scrollTo(0, document.body.scrollHeight);
            // });
            // --> dieser Schritt dauert ca 20 ms und ist wohlmöglich zu schnell (fehlende Bilder)
            // --> stattdessen scrollToBottom verwenden (s.u.)

            // Hier wird die Seite nach unten gescrollt um zu gewährleisten, dass alle Bilder geladen wurden
            await page.evaluate(scrollToBottom); // --> scroll dauert ca 1,5 sec 
            // blackout FreshChat
            await ignoreFreshChat(page)
            // blackout YouTube
            await ignoreYoutube(page)
            
            // Enter the search term into the input field
            await page.fill('#search', searchTerm);
           
            // Submit the form
            await page.click('form#searchForm button[type="submit"]');
            await page.waitForFunction(() => document.fonts.ready);

            // take argos screenshot
            await argosScreenshot(page, link, {
                viewports: [
                    "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                    "iphone-6" // Use device preset for iphone-6 --> 375x667
                ]
            });
        });
    });
});