import { Locator, Page } from "@playwright/test";
import CheckoutPom from "./checkoutPom";

export default class CartPom {
    
    private checkoutBtn: Locator;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.checkoutBtn = this.page.locator("//a/span[text()='CHECKOUT']");
    }

    public async clickCheckout() {
        await this.page.waitForLoadState("load");
        await this.checkoutBtn.click();
        return new CheckoutPom(this.page);
    }

}
