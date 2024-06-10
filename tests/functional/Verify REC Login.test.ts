import { test, expect, type Page, BrowserContext } from "@playwright/test";
import { GoToPage, LoginMechanism } from "core-capabilities/page-objects/login-pages";


test.describe.configure({ mode: "serial" });
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await GoToPage(page);
  await LoginMechanism(page);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Login & Fleet Creation", () => {
  test("Enter Dvoc Page", async ({}) => {
    const h1Element = await page.locator('h1.title');
    expect.soft(await h1Element, 'should be visible').toBeVisible();
});
  test("Create Fleet", async ({}) => {
   
});





});
