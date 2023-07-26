import { test, expect } from 'playwright-test-coverage';

test.describe('测试集标题', () => {
  test('测试用例标题', async ({ page }) => {
    await page.goto('http://localhost:8000/form');

    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('123123123');

    await expect(page.getByLabel('Remember me')).toBeChecked();

    await page.getByLabel('Remember me').uncheck();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('123123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByLabel('Remember me').check();
  });
});
