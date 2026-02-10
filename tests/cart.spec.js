const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Cart UI (Observed Behaviour)', () => {

  test('User can click Add to Cart button without errors', async ({ page }) => {
    await page.goto('/');

    const addToCartBtn = page
      .locator('button')
      .filter({ hasText: /add/i })
      .first();

    // Button exists and is visible
    await expect(addToCartBtn).toBeVisible();
    await expect(addToCartBtn).toBeEnabled();

    // Click Add to Cart
    await addToCartBtn.click();

    // Assert page did not crash or navigate away
    await expect(page).toHaveURL(/amazon-vee/);
  });

});
