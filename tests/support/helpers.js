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

export async function ignoreFreshChat(page, attributeValue = 'transparent') {
    try {
        // Define a locator for the FreshChat element
        const freshChatIcon = await page.locator('#fc_frame').count();

        if (freshChatIcon > 0) { // if this element exists
            // Set the attribute to hide FreshChat
            await page.evaluate((attrValue) => {
                const freshChatElement = document.querySelector('#fc_frame');
                if (freshChatElement) {
                    freshChatElement.setAttribute('data-visual-test', attrValue);
                }
            }, attributeValue);
        }

    } catch (error) {
        console.error('Failed to ignore FreshChat:', error);
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