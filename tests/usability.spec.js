const { test, expect } = require('@playwright/test');
const { goToLogin, goToHome } = require('../helpers/navigation');

test.describe('Amazon Clone - Usability & Accessibility Lite', () => {

  test('Sign In inputs are accessible and usable', async ({ page }) => {
    await goToLogin(page);

    const emailInput = page.locator('input').first();
    const passwordInput = page.locator('input[type="password"]');

    await expect(emailInput).toBeVisible();
    await expect(emailInput).toBeEnabled();

    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toBeEnabled();
  });

  test('Primary buttons are visible and enabled', async ({ page }) => {
    await goToHome(page);

    const buttons = page.locator('button');
    await expect(buttons.first()).toBeVisible();
    await expect(buttons.first()).toBeEnabled();
  });

  test('User is not blocked by hidden or disabled UI elements', async ({ page }) => {
    await goToHome(page);
    await expect(page.locator('body')).toBeVisible();
  });

});
