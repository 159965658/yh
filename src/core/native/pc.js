

export default {
    run(fun, params, success, error = 'window.$error') {
        console.log("log from js");

        console.log(fun, params, success, error);
        let data = {};
        if (fun == 'getDeviceInfo') {
            // data = { "activeCode": "df812e918d0c47db90391a66a0b8d616123", "deviceType": "Lenovo TB-X804F", "dpi": "1.5", "enterpriseIdentification": "ENT-001-001-002", "enterpriseName": "一级分公司1子公司2", "enterpriseUrl": "http://47.92.160.74/api", "imei": "", "systemVersion": "7.1.1" }
            data = {};
        }
        else if (fun == 'login') {
            data = { loginName: '1' };
        }
        else if (fun == 'getUser') {
            data = { "userInfoList": [{ "createdOnUTC": 1539423941533, "creator": "", "crowdFlag": "0", "gesture": "", "institutionCode": "", "institutionName": "", "isAudit": "0", "isDelete": "0", "loginName": "", "modifier": "", "password": "", "updatedOnUTC": 1539423941533, "userCode": "", "webNickName": "" }, { "createdOnUTC": 1539423941548, "creator": "", "crowdFlag": "0", "gesture": "", "institutionCode": "", "institutionName": "", "isAudit": "0", "isDelete": "0", "loginName": "", "modifier": "", "password": "", "updatedOnUTC": 1539423941548, "userCode": "", "webNickName": "" }] }
        }
        window[success](JSON.stringify(data));
        //Android.run(fun, JSON.stringify(params), success, error);
        //Android.run("activition", JSON.stringify({ code: "12sdada122" }), 'success', '$error');
    },
}