// --------------------------------------------------------------------------------------------//
// --------------------------------------- MENU-CONTAINER -------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreMenuContainer(page) {

    const exist_Menu = await page.locator('#nav-menu-container').count()

    if (exist_Menu > 0) { // if this element exists

        await page.evaluate(() => {
            const menuContainer = document.querySelector('#nav-menu-container');
            menuContainer.setAttribute('data-visual-test', 'transparent');  // you can choose between transparent, removed, blackout
        });
    }
}


// --------------------------------------------------------------------------------------------//
// --------------------------------------- FRESHCHAT ------------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreFreshChat(page) {
    try {
        // Define a locator for the FreshChat iframe
        const freshChat = page.locator('#fc_frame');

        // Wait for the iframe to be visible
        await freshChat.waitFor({ state: 'visible' });

        // Evaluate the page context to modify the iframe attribute
        await page.evaluate(() => {
            const freshChatElement = document.querySelector('#fc_frame');
            if (freshChatElement) {
                freshChatElement.setAttribute('data-visual-test', 'transparent'); // Set attribute to 'transparent'
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

    // selector .video
    const exist_youtube_b = await page.locator('.video').count();

    if (exist_youtube_b > 0) { // if this element exists

        await page.evaluate(() => {
            const youTubeVideo_b = document.querySelector('.video');
            youTubeVideo_b.setAttribute('data-visual-test', 'transparent');  // you can choose between transparent, removed, blackout
        });
    }
}