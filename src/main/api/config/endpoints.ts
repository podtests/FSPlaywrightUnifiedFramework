export default class Endpoints {
    private customerLoginEndpoint: string = '/customer/login' ;
    
    public getCustomerLoginEndpoint(): string {
        return this.customerLoginEndpoint;
    }
}