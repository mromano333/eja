import { test, expect } from '@playwright/test';

test('Visit Phoenix dev site and verify the title, quote, and login', async ({ page }) => {
  await page.goto('https://thrive.thrivetrm.cloud/');

  await expect(page).toHaveTitle(/Thrive/);

  const quote = await page.getByText(/Let's build relationships, not just pipelines./);
  await expect(quote !== undefined ).toBeTruthy();

  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('support@thrivetrm.com');

  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');

  await page.locator('input[type="checkbox"]').check();

  await page.locator('text=Continue with Email').click();
});
