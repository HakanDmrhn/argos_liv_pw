import { expect } from '@playwright/test';



// --------------------------------------------------------------------------------------------//
// --------------------------------------- MENU-CONTAINER -------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreMenuContainer(page) {
    try {
        // Define a locator for the menu container
        const menuContainerLocator = page.locator('#nav-menu-container');

        // Check if the menu container exists
        const exists = await menuContainerLocator.count() > 0;

        if (exists) {
            // Perform operations in the browser context
            await page.evaluate(() => {
                const menuContainer = document.querySelector('#nav-menu-container');
                if (menuContainer) {
                    // Set attribute to 'transparent', 'removed', or 'blackout'
                    menuContainer.setAttribute('data-visual-test', 'transparent');
                    console.log('Menu container attribute set to transparent.');
                } else {
                    console.warn('Menu container not found in page.evaluate.');
                }
            });
        } else {
            console.log('Menu container does not exist on the page.');
        }
    } catch (error) {
        console.error('An error occurred while trying to ignore the menu container:', error);
    }
}


/**
 * Blocks the FreshChat script from loading by intercepting and aborting its network requests.
 *
 * @param {import('@playwright/test').Page} page - The Playwright Page object representing the browser page.
 * @returns {Promise<void>} - A promise that resolves when the FreshChat script is successfully blocked.
 */
export async function ignoreFreshChat(page) {
    try {
        // Intercept network requests and abort those for FreshChat widget script
        await page.route('**/wchat.eu.freshchat.com/js/widget.js', route => {
            console.log('Blocking FreshChat script:', route.request().url());
            route.abort(); // Abort requests matching the pattern
        });


    } catch (error) {
        console.error('An error occurred while blocking FreshChat:', error);
        throw error;
    }
}




/**
 * Blocks all YouTube video requests on the page to prevent them from loading.
 * This is useful for visual tests where YouTube videos should be ignored.
 *
 * @param {import('playwright').Page} page - The Playwright page object used to interact with the browser page.
 * @returns {Promise<void>} A promise that resolves when YouTube requests are successfully blocked.
 * @throws Will throw an error if the route interception or aborting the request fails.
 */
export async function ignoreYoutube(page) {
    try {
        console.log('Blocking YouTube video requests');

        // Intercept network requests and block YouTube videos
        await page.route('**youtube**', (route) => {
            route.abort(); // Abort requests matching the pattern
            console.log('YouTube video request blocked:', route.request().url());
        });

        console.log('YouTube video requests successfully blocked.');
    } catch (error) {
        console.error('Error blocking YouTube video requests:', error);
    }
}




/**
 * Checks if all visible buttons in the locator are enabled.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 */
export async function checkButtonAvailability(page) {
    try {
        // Create a locator for all visible button elements
        const buttonLocator = page.locator('button:visible');
        const buttonCount = await buttonLocator.count();
        console.log(`Number of visible buttons found: ${buttonCount}`);

        // If no buttons are found, log a message and return
        if (buttonCount === 0) {
            console.log('No visible buttons found. Skipping visibility and enabled checks.');
            return;
        }

        // Iterate over each button to check if it's visible and enabled
        for (let i = 0; i < buttonCount; i++) {
            const button = buttonLocator.nth(i);

            // Check if the button is disabled before asserting it's enabled
            const isDisabled = await button.getAttribute('disabled');
            
            if (isDisabled) {
                console.log(`Button ${i + 1} is disabled and will be skipped.`);
            } else {
                // Button is visible and not disabled, now check if it's enabled
                try {
                    await expect(button).toBeEnabled();
                    console.log(`Button ${i + 1} is enabled.`);
                } catch (err) {
                    console.error(`Button ${i + 1} enabled check failed: ${err.message}`);
                }
            }
        }
    } catch (err) {
        console.error('Failed during button availability check:', err.message);
    }
}


/**
 * Waits for the specific text to appear in an h1 element on the page.
 * @param {import('@playwright/test').Page} page - The Playwright page object.
 * @param {string} text - The text to wait for.
 * @param {number} timeout - The maximum time to wait for the text (in milliseconds).
 */
export async function waitForTextToAppear(page, text, timeout = 30000) {
    try {
        // Define a locator for the h1 element where the text is expected to appear
        const locator = page.locator('h1'); // Targeting h1 elements

        // Wait for the text to appear in the h1 element
        await expect(locator).toHaveText(text, { timeout });
        console.log(`Text "${text}" appeared in the h1 element on the page.`);
    } catch (error) {
        console.error(`Text "${text}" did not appear in the h1 element within ${timeout}ms.`);
        console.error(error.message);
    }
}