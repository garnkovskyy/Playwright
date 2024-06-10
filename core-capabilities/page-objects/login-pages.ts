import { Locator, Page } from '@playwright/test';


export class LoginPage {
    readonly page: Page;
    readonly SignInWithAbbAd: Locator;

    
    
    constructor(page: Page){
        this.page = page;
        this.SignInWithAbbAd = page.locator('[data-testid="login-page-sign-in-with-ABB_AD"]');



    }

    async clickSignInWithAbbAd(){
        await this.SignInWithAbbAd.click();
    }


}




export default LoginPage;


export async function GoToPage(page: Page) {
    await page.goto("https://dvoc-test.azurewebsites.net/"); 
  }

  
  export async function LoginMechanism(page: Page) {
    
      
      
      await page.locator("[type=email]").fill("rec.regression@outlook.com");
  
      await page.getByRole("button", { name: "Next" }).click();
      await page.getByRole("button", { name: "Work or school account" }).click();
      
      await page.getByLabel("E-mail address").fill("rec.regression@outlook.com");
      await page.getByLabel("Password").fill("ko1EhUdreMoro!");
      await page.getByRole("button", { name: "Login" }).click();
  
  }
  export async function LoginMechanism(page: Page) {
    
      await page.locator('[data-testid="login-page-sign-in-with-ABB_AD"]').click();
      await page.locator("[type=email]").fill("rec.regression@outlook.com");
  
  }