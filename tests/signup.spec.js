const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Create Account UI', () => {

  test('Create Account button is present but does not trigger navigation', async ({ page }) => {
    await page.goto('/');

    // Navigate to Sign In page
    await page.getByRole('link', { name: /sign in/i }).click();
    await page.waitForURL('**/login');

    // Locate Create Account button
    const createAccountBtn = page.locator('.login__registerButton');

    // Assertions
    await expect(createAccountBtn).toBeVisible();
    await expect(createAccountBtn).toBeEnabled();

    // Click Create Account
    await createAccountBtn.click();

    // Assert current behaviour (no navigation implemented)
    await expect(page).toHaveURL(/login/);
  });

});
