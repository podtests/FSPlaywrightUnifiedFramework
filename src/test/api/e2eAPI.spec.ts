import test from "@playwright/test";
import EverShopClient from "../../main/api/client/evershopclient";
import path from "path";
import { readJSONdataFromTestCase } from "../../main/web/util/fileUtils";
import { TestCaseDef } from "../../main/api/testdata/TestcaseDef";
import ApplicationDAO from "../../main/api/applicationdao/applicationdao";
import ApplicationResponsePojo from "../../main/api/pojo/outputpojo/ApplicationResponsePojo";

test("e2eAPI Test", async ({request})=>{

    let applicationDAO:ApplicationDAO = new ApplicationDAO();
    let applicationResponsePojo: ApplicationResponsePojo = new ApplicationResponsePojo();
    let everShopClient = new EverShopClient(request, applicationDAO, applicationResponsePojo);

    const filePath = path.join(process.cwd(),"/src/main/api/testdata/e2eAPI.json");
    const testData: TestCaseDef = readJSONdataFromTestCase(filePath, "TC1");

    
    await everShopClient.loginByCustomer(testData.login.username, testData.login.password);


    console.log(applicationDAO);
    console.log(applicationResponsePojo)

   
})
