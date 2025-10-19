export interface TestCaseDef {
    login: Login,
    home: Home,
    product: Product,
    checkout: Checkout
}


export interface Login{
    username: string,
    password: string
}

export interface Home {
    productName: string
}

export interface Product {
    quantity: string
}

export interface Checkout {
    fullName: string,
    telephone: string,
    address: string,
    city: string,
    countryName: string,
    provinceName: string,
    postcode: string,
    shippingMethod: string,
    paymentMethod: string,

}