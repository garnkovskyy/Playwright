import { test, expect, type Page, BrowserContext } from "@playwright/test";

test.describe.configure({ mode: "serial" });
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Login & Fleet Creation", () => {
  test("Enter Dvoc Page", async ({}) => {
    await page.goto("https://dvoc-test.azurewebsites.net/");
    await page.getByText("Sign In With ABB_AD").click();
    await page.locator("[type=email]").fill("rec.regression@outlook.com");
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Work or school account" }).click();
    await page.getByLabel("E-mail address").fill("rec.regression@outlook.com");
    await page.getByLabel("Password").fill("ko1EhUdreMoro!");
  });
  test("Fleet creation", async ({}) => {
    await page.getByRole("button", { name: "Login" }).click();
  });
});
