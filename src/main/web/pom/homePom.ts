import { Locator, Page } from "@playwright/test";
import HomeInputDao from "../dao/inputdao/HomeInputDao";
import ProductPom from "./productPom";

export default class HomePom {

    private productLink: string;
    private page: Page;

    constructor(page: Page){
        this.page = page;
        this.productLink = "//div[contains(@class,'product-name')]//span[text()='$$$']";
    } 

    public async goto(){
        await this.page.goto("/");
        return this;
    }

    private createProductLocator(prductName: string) {
        let productLinkPath = this.productLink.replace("$$$", prductName);
        return this.page.locator(productLinkPath);
    }

    public async clickProductLink(homeInputDao: HomeInputDao) {
        await this.page.waitForLoadState("load");
        await this.createProductLocator(homeInputDao.getProductName()).click();
        return new ProductPom(this.page);        
    }


}