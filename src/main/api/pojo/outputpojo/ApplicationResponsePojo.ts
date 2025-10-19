import { LoginResponseRoot } from "./LoginResponsePojo";

export default class ApplicationResponsePojo {
    private loginResponseRoot: LoginResponseRoot;
    
    public setLoginResponseRoot(loginResponseRoot: LoginResponseRoot) {
        this.loginResponseRoot = loginResponseRoot;
    }

    public getLoginResponseRoot(): LoginResponseRoot {
        return this.loginResponseRoot;
    }
}