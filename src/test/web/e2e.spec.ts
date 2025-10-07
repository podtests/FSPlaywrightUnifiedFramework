import {test} from '@playwright/test'
//import { LoginPom } from '../../main/web/pom/loginPom';
import  LoginPom  from '../../main/web/pom/loginPom';
import HomePom from '../../main/web/pom/homePom';
import { readJSONdataFromTestCase } from '../../main/web/util/fileUtils';
import LoginInputDao from '../../main/web/dao/inputdao/LoginInputDao';
import HomeInputDao from '../../main/web/dao/inputdao/HomeInputDao';
import ProductInputDao from '../../main/web/dao/inputdao/ProductInputDao';
import ProductPom from '../../main/web/pom/productPom';

test('e2e web flow', async ({page})=> {

    let loginPOM: LoginPom = new LoginPom(page);

    const testData = readJSONdataFromTestCase("src\\main\\web\\testdata\\e2e.json", "TC1");
    const loginData: LoginDataLayer = testData["login"];
    const homeData: HomeDataLayer = testData["home"];
    const productData: ProductDataLayer = testData["product"];

    let loginInputDao: LoginInputDao = new LoginInputDao(loginData);
    let homeInputDao: HomeInputDao = new HomeInputDao(homeData);
    let productInputDao: ProductInputDao = new ProductInputDao(productData);

    await loginPOM.goto();

    let homePOM: HomePom =  await loginPOM.fillCredentials(loginInputDao);
    let productPOM: ProductPom =  await homePOM.clickProductLink(homeInputDao);
    productPOM.fillProductDetails(productInputDao);


})
