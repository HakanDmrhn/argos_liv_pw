// --------------------------------------------------------------------------------------------//
// --------------------------------------- MENU-CONTAINER -------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreMenuContainer(page) {

    const exist_Menu = await page.locator('#nav-menu-container').count()

    if (exist_Menu > 0) { // if this element exists

        console.log('menu container does exist: ' + exist_Menu)
        await page.evaluate(() => {
            const menuContainer = document.querySelector('#nav-menu-container');
            menuContainer.setAttribute('data-visual-test', 'transparent');  // you can choose between transparent, removed, blackout
        });
    }
    else {
        console.log('menu container does NOT exist: ' + exist_Menu)
    }
}


// --------------------------------------------------------------------------------------------//
// --------------------------------------- FRESHCHAT ------------------------------------------//
// --------------------------------------------------------------------------------------------//

export async function ignoreFreshChat(page) {

    const freshChat = page.locator('#fc_frame')
    await freshChat.waitFor()  // wait for freshChat-Icon to be visible

    await page.evaluate(() => {
        const freshChatElement = document.querySelector('#fc_frame');
        freshChatElement.setAttribute('data-visual-test', 'transparent'); // you can choose between transparent, removed, blackout
    });
}