import { Locator, Page } from "@playwright/test";
import ProductInputDao from "../dao/inputdao/ProductInputDao";

export default class ProductPom {

    private sizeType: string;
    private colorType: string;
    private qtyTB: Locator;
    private addToCartBtn: Locator;
    private page: Page;
    private viewCartBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.sizeType = "(//ul[contains(@class,'variant-option-list')])[1]/li/a[text()='$$$']",
        this.colorType = "(//ul[contains(@class,'variant-option-list')])[2]/li/a[text()='$$$']",
        this.qtyTB = this.page.locator("input[name='qty']");
        this.addToCartBtn = this.page.locator("//button[@type='button']/span[text()='ADD TO CART']");
        this.viewCartBtn = this.page.locator("a.add-cart-popup-button");
    }

    private createSizeTypeLocator(size: string) {        
        return this.page.locator(this.sizeType.replace("$$$", size));
    }

    private createColorTypeLocator(color: string) {        
        return this.page.locator(this.colorType.replace("$$$", color));
    }

    public async fillProductDetails(productInputDao: ProductInputDao){
        await this.selectSize(productInputDao.getSize());
        await this.selectColor(productInputDao.getColor());
        await this.fillQty(productInputDao.getQuantity());
        await this.clickAddToCart();
        await this.clickViewCart();
    }


    public async selectSize(size: string) {
        this.createSizeTypeLocator(size).click();
        return this;
    }

    public async selectColor(color: string) {
        this.createColorTypeLocator(color).click();
        return this;
    }

    public async fillQty(qty: string) {
        await this.qtyTB.fill(qty);
        return this;
    }

    public async clickAddToCart() {
        await this.addToCartBtn.click();
        return this;
    }

    public async clickViewCart() {
        await this.viewCartBtn.click();
        return this;
    }







    
}