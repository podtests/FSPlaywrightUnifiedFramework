import LoginInputPojo from "../pojo/inputpojo/LoginInputPojo";

export default class LoginInputPayloadBuilder {

    private email: string;
    private password: string;

    public setEmail(email: string): LoginInputPayloadBuilder {
        this.email = email;
        return this;
    }

    public setPassword(password: string): LoginInputPayloadBuilder {
        this.password = password;
        return this;
    }

    public build(): LoginInputPojo {
        return new LoginInputPojo(this.email, this.password);
    }

}