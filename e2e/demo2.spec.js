const { test, expect } = require('@playwright/test');

test('go to page', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');

    await expect(page.getByText('My Cart').first()).toBeVisible();
});

test('zero cart items', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');

    const carticon = page.locator('#cart-target-desktop');

    await expect(carticon).toHaveText('(0)');

    await carticon.click();

    await expect(page.getByText('Your cart is empty.')).toBeVisible();
});
