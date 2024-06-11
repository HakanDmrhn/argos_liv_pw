import { argosScreenshot } from "@argos-ci/playwright";
import { test } from '@playwright/test';
import { ignoreFreshChat, ignoreMenuContainer } from '../../support/helpers'

let scrollToBottom = require("scroll-to-bottomjs");

test.describe('Integration test with visual testing - plissee configurator special shapes', function () {

    test('Plissee - Sonderformen', async function ({ page }) {

        await page.goto('/plissee/plissee-konfigurator');

        // ******************* Sonderformen *******************
        // change to tab Sonderformen
        await page.locator('.tabs > :nth-child(3)').click();
        await page.evaluate(scrollToBottom);
        await ignoreMenuContainer(page);
        await ignoreFreshChat(page);

        // --------------------------------------------------------------------------------------------------

        // preselected type is FDS3 
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FDS3 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FDS3 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select FDS4
        await page.getByText(new RegExp("^FDS4\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FDS4 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FDS4 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS9
        await page.getByText(new RegExp("^VS9\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS9', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // --------------------------------------------------------------------------------------------------

        // select VS10 
        await page.getByText(new RegExp("^VS10\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS10 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS10 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select SD2
        await page.getByText(new RegExp("^SD2\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - SD2 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - SD2 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select SD3
        await page.getByText(new RegExp("^SD3\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - SD3', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // --------------------------------------------------------------------------------------------------

        // select VS4 S1
        await page.getByText(new RegExp("^VS4 S1\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS4 S1 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS4 S1 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS4 S2
        await page.getByText(new RegExp("^VS4 S2\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS4 S2 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS4 S2 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select FS1
        await page.getByText(new RegExp("^FS1\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FS1 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FS1 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select FS2
        await page.getByText(new RegExp("^FS2\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FS2 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - FS2 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS7
        await page.getByText(new RegExp("^VS7\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS7', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // --------------------------------------------------------------------------------------------------

        // select VS8
        await page.getByText(new RegExp("^VS8\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS8 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS8 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS5
        await page.getByText(new RegExp("^VS5\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS5 links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS5 rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS5 SD
        await page.getByText(new RegExp("^VS5 SD\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS5 SD links gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // change direction to rechts
        await page.getByText(new RegExp("^rechts\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS5 SD rechts gerichtet', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });

        //reset direction to left
        await page.getByText(new RegExp("^links\\s*$")).first().click();

        // --------------------------------------------------------------------------------------------------

        // select VS6
        await page.getByText(new RegExp("^VS6\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS6', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // --------------------------------------------------------------------------------------------------

        // select VS6 SD
        await page.getByText(new RegExp("^VS6 SD\\s*$")).first().click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - VS6 SD', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });


        // --------------------------------------------------------------------------------------------------

        // select Bedienstab
        await page.locator('div[options-property="bedienstab"] > ul > :nth-child(2)').click();
        // take argos screenshot
        await argosScreenshot(page, 'Plissee Sonderformen - Bedienstab', {
            viewports: [
                "macbook-16", // Use device preset for macbook-16 --> 1536 x 960
                "iphone-6" // Use device preset for iphone-6 --> 375x667
            ]
        });
    });
});
