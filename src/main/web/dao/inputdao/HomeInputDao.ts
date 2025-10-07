export default class HomeInputDao{
    private productName: string;

    constructor(homeDataLayer: HomeDataLayer) {
        this.productName = homeDataLayer.productName;
    }

    public getProductName(){
        return this.productName;
    }
}