export async function configure_zubehoer_rollo(page) {
    // Load zubehör page
    await page.goto('/bedienstab-rollo-dachfenster');

    // Log all responses to check if the expected response is being received
    page.on('response', response => {
        console.log('Response URL:', response.url(), 'Status:', response.status());
    });

    // Wait for the response for JS files and check for status code 200
    try {
        await Promise.all([
            page.waitForResponse(response =>
                response.url().includes('/skin/frontend/delphinus/default/js_minify/') && response.status() === 200, 
                { timeout: 10000 } // Increased timeout to 10000ms
            )
        ]);
    } catch (error) {
        console.error('Error waiting for response:', error);
        // Fallback wait to ensure the page has enough time to process JS
        await page.waitForTimeout(5000);
    }

    // Select size
    await page.locator('.last select').selectOption({ label: '100 cm' });

    // Input quantity
    await page.locator('#qty').clear();
    await page.locator('#qty').fill('1');

    // Click add to cart button
    await page.locator('.cart-container > button').click();
}
