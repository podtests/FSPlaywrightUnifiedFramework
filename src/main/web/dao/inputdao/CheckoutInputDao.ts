import CheckoutDataLayer from "../../datacontrolledlayer/checkoutDataLayer";

export default class CheckoutInputDao {
    private fullName: string;
    private telephone: string;
    private address: string;
    private city: string;
    private country: string;
    private province: string; 
    private postcode: string;
    private shippingMethod: string;
    private paymentMethod: string;  

   constructor(data: CheckoutDataLayer) {
       this.fullName = data.fullName;
       this.telephone = data.telephone;
       this.address = data.address;
       this.city = data.city;
       this.country = data.country;
       this.province = data.province;
       this.postcode = data.postcode;
       this.shippingMethod = data.shippingMethod;
       this.paymentMethod = data.paymentMethod;
   }

   public getFullName(): string {
       return this.fullName;
   }

   public getTelephone(): string {
       return this.telephone;
   }

   public getAddress(): string {
       return this.address;
   }

   public getCity(): string {
       return this.city;
   }

   public getCountry(): string {
       return this.country;
   }

   public getProvince(): string {
       return this.province;
   }

   public getPostcode(): string {
       return this.postcode;
   }

   public getShippingMethod(): string {
       return this.shippingMethod;
   }

   public getPaymentMethod(): string {
       return this.paymentMethod;
   }

}