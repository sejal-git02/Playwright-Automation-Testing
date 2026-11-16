const { test, expect } = require('@playwright/test');

test('has tagline', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');

    await expect(
        page.getByText('Just a demo site showing off what Sauce can do.')
    ).toBeVisible();
});

test('add to cart', async ({ page }) => {
    await page.goto('https://sauce-demo.myshopify.com/');

    const product = page.getByText('Grey jacket');

    await expect(product).toBeVisible();

    await product.hover();
    await product.click();

    const action = page.getByRole('button', { name: 'ADD TO CART' });

    await expect(action).toBeVisible();
    await action.click();
});
