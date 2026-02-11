const { test, expect } = require('@playwright/test');
const { goToHome } = require('../helpers/navigation');

test.describe('Amazon Clone - Homepage UI', () => {

  test('Homepage loads successfully', async ({ page }) => {
    await goToHome(page);
    await expect(page).toHaveURL(/amazon-vee/);
  });

  test('Products are displayed on the homepage', async ({ page }) => {
    await goToHome(page);
    await expect(page.locator('.product').first()).toBeVisible();
  });

  test('Each product has an Add to Cart button', async ({ page }) => {
    await goToHome(page);

    const firstProduct = page.locator('.product').first();
    await expect(firstProduct.locator('button')).toBeVisible();
  });

});
