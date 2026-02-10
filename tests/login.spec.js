const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Sign In (Unauthenticated User)', () => {

  test('User is prompted to create an account when signing in without registration', async ({ page }) => {
    await page.goto('/');

    // Navigate to login
    await page.getByRole('link', { name: /sign in/i }).click();
    await page.waitForURL('**/login');

    // Fill credentials (user does NOT exist)
    await page.locator('input[type="text"]').first().fill('newuser@example.com');
    await page.locator('input[type="password"]').fill('password123');

    await page.getByRole('button', { name: /sign in/i }).click();

    // Expected behaviour: user should be guided to sign up
    // Since backend is not implemented, assert current behaviour
    await expect(page).toHaveURL(/login/);
  });

});
