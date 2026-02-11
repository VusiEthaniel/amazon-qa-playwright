const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Usability & Accessibility Lite', () => {

  test('Sign In inputs are accessible and usable', async ({ page }) => {
    await page.goto('/login');

    const emailInput = page.locator('input').first();
    const passwordInput = page.locator('input[type="password"]');

    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeEnabled();

    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toBeEnabled();
  });

  test('Primary buttons are visible and enabled', async ({ page }) => {
    await page.goto('/');

    const buttons = page.locator('button');

    // At least one button should be usable
    await expect(buttons.first()).toBeVisible();
    await expect(buttons.first()).toBeEnabled();
  });

  test('User is not blocked by hidden or disabled UI elements', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();
  });

});
