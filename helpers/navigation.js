async function goToHome(page) {
  await page.goto('/');
}

async function goToLogin(page) {
  await page.goto('/');
  await page.getByRole('link', { name: /sign in/i }).click();
}

module.exports = {
  goToHome,
  goToLogin,
};
