export default class ApplicationDAO {

    private loginDao: LoginDao;

    public setLoginDao(loginDao: LoginDao) {
        this.loginDao = loginDao;
    }

    public getLoginDao(): LoginDao {
        return this.loginDao;
    }

}


export  class LoginDao  {
    private sid: string;

    public setSid(sid: string) {
        this.sid = sid;
    }

    public getSid(): string {
        return this.sid;
    }
}