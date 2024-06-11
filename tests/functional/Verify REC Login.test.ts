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
  
  test("Enter New Fleet Creation", async ({}) => {
    await page.goto("https://dvoc-test.azurewebsites.net/"); 
    await page.locator('[data-testid="login-page-sign-in-with-ABB_AD"]').click();
    await page.locator("[type=email]").fill("rec.regression@outlook.com");
    await page.getByRole("button", { name: "Next" }).click();
    await page.getByRole("button", { name: "Work or school account" }).click();
    await page.getByLabel("E-mail address").fill("rec.regression@outlook.com");
    await page.getByLabel("Password").fill("ko1EhUdreMoro!");
    await page.getByRole("button", { name: "Login" }).click();
    const CreateNewFleetButton = page.getByRole("button", {name: "Create New Fleet"});
    await expect(CreateNewFleetButton).toBeVisible();
    await CreateNewFleetButton.click();
});
  
test("Save Fleet", async ({}) => {
  const ConfirmCreationOfNewFleetButton = page.getByRole("button", {name:"Save fleet"});
  await expect(ConfirmCreationOfNewFleetButton).toBeDisabled();
  await page.getByTestId("#fleet-create-fleet-name-field").fill("Test Auto Fleet");
  const OrganizationDropdown = page.getByTestId("mat-select-4");
  await OrganizationDropdown.selectOption("Select All ");

});
  



});
