const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Homepage UI', () => {

  test('Homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    // Basic sanity check
    await expect(page).toHaveURL(/amazon-vee/);
  });

  test('Products are displayed on the homepage', async ({ page }) => {
    await page.goto('/');

    const products = page.locator('.product');

    // At least one product should be visible
    await expect(products.first()).toBeVisible();
  });

  test('Each product has an Add to Cart button', async ({ page }) => {
    await page.goto('/');

    const firstProduct = page.locator('.product').first();
    const addToCartButton = firstProduct.locator('button');

    await expect(firstProduct).toBeVisible();
    await expect(addToCartButton).toBeVisible();
    await expect(addToCartButton).toBeEnabled();
  });

});
