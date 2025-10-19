import { APIRequestContext } from "@playwright/test";
import Endpoints from "../config/endpoints";
import LoginInputPayloadBuilder from "../payloadbuilder/LoginInputPayloadBuilder";
import { LoginResponseRoot } from "../pojo/outputpojo/LoginResponsePojo";
import ApplicationDAO, { LoginDao } from "../applicationdao/applicationdao";
import ApplicationResponsePojo from "../pojo/outputpojo/ApplicationResponsePojo";

export default class EverShopClient {


    private request: APIRequestContext;
    private applicationDAO: ApplicationDAO;
    private applicationResponsePojo: ApplicationResponsePojo;
    private endpoints: Endpoints = new Endpoints();

    constructor(request: APIRequestContext, applicationDAO: ApplicationDAO, applicationResponsePojo: ApplicationResponsePojo) {
        this.request = request;
        this.applicationDAO = applicationDAO
        this.applicationResponsePojo = applicationResponsePojo;
    }

    public async loginByCustomer(email: string, password: string) {
        
        let loginInputPayloadBuilder = new LoginInputPayloadBuilder();
        let res = await this.request.post(this.endpoints.getCustomerLoginEndpoint(), {
            data: loginInputPayloadBuilder.setEmail(email).setPassword(password).build()
        });

        let responseBody: LoginResponseRoot = await res.json();
        this.applicationResponsePojo.setLoginResponseRoot(responseBody);

        let loginDao = new LoginDao();
        loginDao.setSid(responseBody.data.sid);        
        this.applicationDAO.setLoginDao(loginDao);
        
        }
}