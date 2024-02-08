// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


// this describes a test hook
test.describe('test suite', () => {
  // all test requests made should be asynchronous - goes to the start url before each test
  test.beforeEach(async({page}) => {
    await page.goto('https://playwright.dev/')
  })

  test('main navigation', async ({ page }) => {
    // Assertions use the expect API.
    await expect(page).toHaveURL('https://playwright.dev/');
  });
});


test('Trace viewer link', async({ page }) => {
  await page.goto("https://playwright.dev/docs/running-tests")

  await expect(page.getByRole('heading', {name : 'Running and debugging tests'})).toBeVisible();
});