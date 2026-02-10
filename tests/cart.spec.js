const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Cart UI', () => {

  test('User can add a product to cart', async ({ page }) => {
    await page.goto('/');

    // Ensure products are visible
    const products = page.locator('.product'); // adjust if class differs
    await expect(products.first()).toBeVisible();

    // Click first "Add to Cart" button
    const addToCartBtn = products.first().getByRole('button', { name: /add to cart/i });
    await expect(addToCartBtn).toBeVisible();
    await addToCartBtn.click();

    // Navigate to cart
    await page.getByRole('link', { name: /cart/i }).click();

    // Assert item appears in cart UI
    const cartItems = page.locator('.cart-item'); // adjust if needed
    await expect(cartItems.first()).toBeVisible();
  });

  test('User can remove a product from cart', async ({ page }) => {
    await page.goto('/');

    // Add product
    const products = page.locator('.product');
    await products.first().getByRole('button', { name: /add to cart/i }).click();

    // Go to cart
    await page.getByRole('link', { name: /cart/i }).click();

    const removeBtn = page.getByRole('button', { name: /remove/i });
    await expect(removeBtn).toBeVisible();
    await removeBtn.click();

    // Cart should now be empty or item removed
    await expect(page.locator('.cart-item')).toHaveCount(0);
  });

});
