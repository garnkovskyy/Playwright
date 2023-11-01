import { test, expect, Page } from '@playwright/test';


test.describe('suite', () => { 
  
  test('Enter Dvoc Page', async ({ page }) => {
    await page.goto('https://dvoc-test.azurewebsites.net/');
    await page.getByTestId('login-page-sign-in-with-ABB_AD').click();
    await page.waitForTimeout(5000); // Czekaj 5 sekundy
  });

  test('Enter Email on Microsoft Page', async ({ page }) => {
    await page.waitForTimeout(5000); // Czekaj 5 sekundy
    await page.getByPlaceholder('someone@example.com').click();
    await page.getByPlaceholder('someone@example.com').fill('rec.regression@outlook.com');
    await page.getByRole('button', { name: 'Dalej' }).click();
  });
  test('Wybierz rodzaj konta i kliknij', async ({ page }) => {
    await page.getByRole('button', { name: 'Konto służbowe Utworzone przez Twój dział IT rec.regression@outlook.com' }).click();
  
  });
  test('Wpisz email w domene ABB', async ({ page }) => {
    
    await page.getByLabel('E-mail address').click();
    await page.getByLabel('E-mail address').fill('rec.regression@outlook.com');
    
  });
  test('Wpisz haslo i kliknij Login', async ({ page }) => {
    await page.getByLabel('Password').click();
    await page.getByLabel('Password').fill('ko1EhUdreMoro!');
    await page.getByRole('button', { name: 'Login' }).click();
  });

});
