import { test, expect } from '@playwright/test';

test('Простий тест для рекрутера', async ({ page }) => {
  // Переходимо на тестовий сайт
  await page.goto('https://example.com');
  
  // Перевіряємо заголовок сторінки
  await expect(page).toHaveTitle('Example Domain');
  
  // Перевіряємо головний заголовок
  await expect(page.locator('h1')).toContainText('Example Domain');
  
  console.log('✅ Тест успішно пройдений!');
});

test('Перевірка посилання', async ({ page }) => {
  await page.goto('https://example.com');
  
  // Знаходимо посилання за текстом
  const link = page.getByText('More information...');
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
});