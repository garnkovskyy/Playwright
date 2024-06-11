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

  