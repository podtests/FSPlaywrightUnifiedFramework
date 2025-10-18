import { Locator, Page } from "@playwright/test";
import CheckoutInputDao from "../dao/inputdao/CheckoutInputDao";

export default class CheckoutPom {

    private page: Page;
    private fullNameTB: Locator;
    private telephoneTB: Locator;
    private addressTB: Locator;
    private cityTB: Locator;
    private countryDD: Locator;
    private provinceDD: Locator;
    private postalCodeTB: Locator;
    private continueToPaymentBtn: Locator;
    private shippingMethodType: string;
    private paymentMethodType: string;
    private placeOrderBtn: Locator;

    constructor(page: Page) {

        this.page = page;
        this.fullNameTB = this.page.locator("//input[@name='address[full_name]']");
        this.telephoneTB = this.page.locator("//input[@name='address[telephone]']");
        this.addressTB = this.page.locator("//input[@name='address[address_1]']");
        this.cityTB = this.page.locator("//input[@name='address[city]']");
        this.countryDD = this.page.locator("//select[@name='address[country]']");
        this.provinceDD = this.page.locator("//select[@name='address[province]']");
        this.postalCodeTB = this.page.locator("//input[@name='address[postcode]']");
        this.continueToPaymentBtn = this.page.locator("//button/span[text()='Continue to payment']");
        this.shippingMethodType = "//div[@class='shipping-methods']//input//following-sibling::span[contains(text(),'$$$')]";
        this.paymentMethodType = "//img[contains(@alt,'$$$')]//ancestor::div[contains(@class,'payment-method-list')]//a";
        this.placeOrderBtn = this.page.locator("//button/span[text()='Place Order']");
    }

    public async fillCheckoutDetails(checkoutInputDao: CheckoutInputDao) {
        await this.fullNameTB.fill(checkoutInputDao.getFullName());
        await this.telephoneTB.fill(checkoutInputDao.getTelephone());
        await this.addressTB.fill(checkoutInputDao.getAddress());
        await this.cityTB.fill(checkoutInputDao.getCity());
        await this.countryDD.selectOption({label: checkoutInputDao.getCountry()});
        await this.provinceDD.waitFor({state: 'visible'});
        await this.provinceDD.selectOption({label: checkoutInputDao.getProvince()});
        await this.postalCodeTB.fill(checkoutInputDao.getPostcode());
        await this.selectShippingmethod(checkoutInputDao.getShippingMethod());
        await this.continueToPaymentBtn.click();
        await this.selectPaymentMethod(checkoutInputDao.getPaymentMethod());
        await this.placeOrderBtn.click();
        return this;
    }

    public async selectShippingmethod(shippingMethod: string) {

        let finalShippingMethodType: string;
        if(shippingMethod.toLowerCase().includes("standard")){
           finalShippingMethodType =  this.shippingMethodType.replace("$$$", "Standard");
        }else {
           finalShippingMethodType = this.shippingMethodType.replace("$$$", "Express");
        }

        await this.page.locator(finalShippingMethodType).waitFor({state: 'visible'});
        await this.page.locator(finalShippingMethodType).click();
        return this;

    }

    public async selectPaymentMethod(paymentMethod: string) {

        let finalPaymentMethodType: string;
        if(paymentMethod.toLowerCase().includes("cash")){
            finalPaymentMethodType = this.paymentMethodType.replace("$$$", "Cash On Delivery");
        }
        else {
            finalPaymentMethodType = this.paymentMethodType.replace("$$$", "Paypal");
        }

        await this.page.locator(finalPaymentMethodType).waitFor({state: 'visible'});
        await this.page.locator(finalPaymentMethodType).click();
        return this;

    }




}