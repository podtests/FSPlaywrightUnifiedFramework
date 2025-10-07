import * as fs from 'fs';

//src\main\web\testdata\e2e.json
export function readJson(filepath: string) {
    const data = fs.readFileSync(filepath, "utf-8");
    return JSON.parse(data);
}


export function readJSONdataFromTestCase(filepath: string, testcaseName: string){
    const data = readJson(filepath);
    return data[testcaseName];

}

