import { Locator, Page } from "@playwright/test";
import HomePom from "./homePom";
import LoginInputDao from "../dao/inputdao/LoginInputDao";

export default class LoginPom {

    private userNameTB: Locator;
    private passwordTB: Locator;
    private submitBtn: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.userNameTB = this.page.locator("//input[@name='email']");
        this.passwordTB = this.page.locator("//input[@name='password']");
        this.submitBtn = this.page.locator("button[type='submit']");
    }

    public async goto() {
        await this.page.goto("account/login");
        return this;
    }

    public async fillUserName(userName: string) {
        await this.page.waitForLoadState("load");
        await this.userNameTB.fill(userName);
        return this;        
    }

    public async fillPassword(password: string) {
        await this.passwordTB.fill(password);
        return this;        
    }

    public async clickSubmit() {
        await this.submitBtn.click();
        return this;
              
    }

    public async fillCredentials(loginInputDao: LoginInputDao){
        await this.fillUserName(loginInputDao.getuserName());
        await this.fillPassword(loginInputDao.getPassword());
        await this.clickSubmit(); 
        return new HomePom(this.page);         
    }


}

