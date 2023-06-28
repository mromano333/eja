import { test, expect } from '@playwright/test';

test('Visit Phoenix dev site and verify the title and login', async ({ page }) => {
  await page.goto('https://thrive.thrivetrm.cloud/');

  await expect(page).toHaveTitle(/NxGen Front-End/);

  await expect(page).toHaveText(/Let's build relationships, not just pipelines./);

  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('support@thrivetrm.com');

  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('password');

  await page.locator('[placeholder="Password"]').press('Enter');

  await page.locator('input[type="checkbox"]').check();

  await page.locator('text=Continue with Username').click();
});
