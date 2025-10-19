export default class LoginInputPojo {

    private email: string;
    private password: string;


    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }


    public getEmail(): string {
        return this.email;
    }

    public getPassword(): string {
        return this.password;
    }
}