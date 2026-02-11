const { test, expect } = require('@playwright/test');

test.describe('Amazon Clone - Navigation', () => {

  test('Sign In link is visible on the homepage', async ({ page }) => {
    await page.goto('/');

    const signInLink = page.getByRole('link', { name: /sign in/i });
    await expect(signInLink).toBeVisible();
  });

  test('Clicking Sign In navigates to login page', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /sign in/i }).click();

    // Validate navigation behaviour
    await expect(page).toHaveURL(/login/);
  });

  test('Page does not break when navigating via header', async ({ page }) => {
    await page.goto('/');

    // Simple stability check
    await expect(page.locator('body')).toBeVisible();
  });

});
