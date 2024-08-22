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


// --------------------------------------------------------------------------------------------//
// --------------------------------------- FRESHCHAT ------------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreFreshChat(page) {
    try {
        // Define a locator for the FreshChat iframe
        const freshChatLocator = page.locator('#fc_frame');

        // Wait for the iframe to be visible
        await freshChatLocator.waitFor({ state: 'visible' });

        // Wait for the fc_logo.png image request to complete
        await Promise.all([
            page.waitForResponse(response =>
                response.url().includes('fc_logo.png') && response.status() === 200,
                { timeout: 10000 } // Adjust timeout as needed
            )
        ]);

        // Evaluate the page context to modify the iframe attribute
        await page.evaluate(() => {
            const freshChatElement = document.querySelector('#fc_frame');
            if (freshChatElement) {
                // Set attribute to 'transparent' or other desired value
                freshChatElement.setAttribute('data-visual-test', 'transparent');
            } else {
                console.warn('FreshChat element not found.');
            }
        });
    } catch (error) {
        console.error('An error occurred while trying to ignore FreshChat:', error);
    }
}



// --------------------------------------------------------------------------------------------//
// --------------------------------------- YOUTUBE --------------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreYoutube(page) {
    try {
        // Define a locator for YouTube video elements
        const youtubeLocator = page.locator('.video');

        // Check if any YouTube video elements exist
        const exists = await youtubeLocator.count() > 0;

        if (exists) {
            // Perform operations in the browser context
            await page.evaluate(() => {
                const youtubeVideos = document.querySelectorAll('.video');
                youtubeVideos.forEach(video => {
                    video.setAttribute('data-visual-test', 'transparent'); // Set attribute to 'transparent'
                    console.log('YouTube video attribute set to transparent.');
                });
            });
        } else {
            console.log('No YouTube video elements found on the page.');
        }
    } catch (error) {
        console.error('An error occurred while trying to ignore YouTube videos:', error);
    }
}
