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
        console.log('Starting ignoreFreshChat function');

        // Locate the FreshChat frame element
        const freshChatLocator = page.locator('#fc_frame');

        // Wait for the FreshChat frame to appear
        await freshChatLocator.waitFor({ state: 'attached' });

        // Check if exists
        const exists = await freshChatLocator.count() > 0;
        if (exists) {
            console.log('FreshChat frame is visible');

            // Evaluate the page to set the attribute
            await page.evaluate(() => {
                const freshChatElement = document.querySelector('#fc_frame');
                if (freshChatElement) {
                    freshChatElement.setAttribute('data-visual-test', 'transparent'); // You can choose between transparent, removed, blackout
                    console.log('FreshChat frame attribute set to "transparent"');
                } else {
                    console.warn('FreshChat frame element not found during evaluation');
                }
            });

        } else {
            console.log('FreshChat frame not found on the page');
        }
    } catch (error) {
        // Log the error and rethrow it if needed
        console.error('An error occurred in ignoreFreshChat function', error);
        throw error;
    }
}




// --------------------------------------------------------------------------------------------//
// --------------------------------------- YOUTUBE --------------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreYoutube(page) {
    try {
        console.log('Starting ignoreYoutube function');
        
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
