import { expect } from '@playwright/test';

export async function configure_zubehoer_rollo(page) {
    // Load zubehör page
    await page.goto('/bedienstab-rollo-dachfenster');

    // Wait for the JS file to load by checking for an element that depends on it
    await page.waitForResponse(response =>
        response.url().includes('/skin/frontend/delphinus/default/js_minify/') && response.status() === 200
    );

    // Verify that the necessary elements are available and interact with them
    const sizeSelector = page.locator('.last select');
    await expect(sizeSelector).toBeVisible();

    // Select size
    await sizeSelector.selectOption({ label: '100 cm' });

    // Input quantity
    const quantityInput = page.locator('#qty');
    await expect(quantityInput).toBeVisible();
    await quantityInput.fill('1');

    // Click add to cart button
    const addToCartButton = page.locator('.cart-container > button');
    await expect(addToCartButton).toBeVisible();
    await addToCartButton.click();
}
