

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
            data = { loginName: '1', userCode: "22" };
        }
        else if (fun == 'getUser') {
            data = { "userInfoList": [{ "createdOnUTC": 1539423941533, "creator": "", "crowdFlag": "0", "gesture": "", "institutionCode": "", "institutionName": "", "isAudit": "0", "isDelete": "0", "loginName": "", "modifier": "", "password": "", "updatedOnUTC": 1539423941533, "userCode": "", "webNickName": "" }, { "createdOnUTC": 1539423941548, "creator": "", "crowdFlag": "0", "gesture": "", "institutionCode": "", "institutionName": "", "isAudit": "0", "isDelete": "0", "loginName": "", "modifier": "", "password": "", "updatedOnUTC": 1539423941548, "userCode": "", "webNickName": "" }] }
        }
        else if (fun == 'getcustomer') {
            data = {
                "customerInfoList": [{
                    customerCode: '客户编号',
                    creatorCode: "创建用户编号",
                    cCardType: 101,// "101：身份证，105：其他",
                    uCardNum: "证件编号",
                    cName: "客户姓名",
                    birth: "2019-01-01",
                    nation: "民族",
                    sex: 1,//"性别 0：男，1：女",
                    fixedTel: " 办公电话，选填",
                    mobileTel: "手机号码, 选填",
                    contactAddress: "联系地址，选填"
                }]
            };
        }
        else if (fun == 'gethxjson') {
            data = { "questions": ["(1)您精力充沛吗？", "(2)您容易疲乏吗？", "(3)您容易气短(呼吸短促，接不上气)吗？", "(4)您容易心慌吗？", "(5)您容易头晕或站起时眩晕吗？", "(6)您喜欢安静、懒得说话吗？", "(7)您说话声音低弱无力吗？", "(8)您容易忘事（健忘）吗？", "(9)您感到闷闷不乐、情绪低沉吗？", "(10)您多愁善感、感情脆弱吗？", "(11)您容易精神紧张、焦虑不安吗？", "(12)您容易感到害怕或受到惊吓吗？", "(13)您肋胁部或乳房胀痛吗？", "(14)您感到胸闷或腹部胀满吗？", "(15)您无缘无故叹气吗？", "(16)您感到身体沉重不轻松或不爽快吗？", "(17)您感到手脚心发热吗？", "(18)您感觉身体、脸上发热吗？", "(19)您手脚发凉吗？", "(20)您胃脘部、背部或腰膝部怕冷吗？", "(21)您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？", "(22)您感到怕冷、衣服比别人穿的多吗？", "(23)您比别人容易患感冒吗？", "(24)您没有感冒时也会打喷嚏吗？", "(25)您没有感冒时也会鼻塞、流鼻涕吗？", "(26)您活动量稍大就容易出虚汗吗？", "(27)您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？", "(28)您皮肤容易起荨麻疹(风团、风疹块、风疙瘩)及抓痕吗？", "(29)您有因季节变化、温度变化或异味等原因而咳喘的现象吗？", "(30)您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗？", "(31)您的皮肤一抓就红，并出现抓痕吗？", "(32)您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗？", "(33)您皮肤或口唇干吗？", "(34)您身体上有哪里疼痛吗？", "(35)您面部两颧潮红或偏红吗？", "(36)您两颧部有细微红丝吗？", "(37)您口唇的颜色比一般人红吗？", "(38)您有额部油脂分泌多的现象吗？", "(39)您面部或鼻部有油腻感或者油光发亮吗？", "(40)您面色晦暗、或容易出现褐斑吗？", "(41)您易生痤疮或者疮疖吗？", "(42)您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？", "(43)您容易有黑眼圈吗？", "(44)您感到眼睛干涩吗？", "(45)您口唇颜色偏黯吗？", "(46)您感到口干咽燥、总想喝水吗？", "(47)您咽喉部有异物感，且吐之不出、咽之不下吗？", "(48)您平时痰多，特别是咽喉部总有痰堵着吗？", "(49)您感到口苦或嘴里有异味吗？", "(50)您嘴里常有黏黏的感觉吗？", "(51)您舌苔厚腻或有舌苔厚厚的感觉吗？", "(52)您腹部肥满松软吗？", "(53)您受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？", "(54)您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西吗？", "(55)您容易失眠吗？", "(56)您有大便粘滞不爽、解不尽的感觉吗？", "(57)您容易便秘或大便干燥吗？", "(58)您小便时尿道有发热感、尿色浓(深)吗？", "(59)您带下色黄(白带颜色发黄)吗？（限女性回答）/您的阴囊部位潮湿吗？（限男性回答）", "(60)您能适应外界自然和社会环境的变化吗？"], "pinghe": [1, 60, -7, -23, -21, -8, -55], "qixu": [2, 3, 23, 7, 26, 6, 4], "yangxu": [20, 21, 53], "yinxu": [17, 44, 46, 35], "tanshi": [42, 39, 51, 48, 14, 16], "shire": [39, 41, 49, 50, 56, 57, 58, 59], "xueyu": [32, 40, 45, 34, 43], "qiyu": [9, 11, 47, 15, 13], "tebing": [25, 27, 28, 30] }
        }
        else if (fun == 'getwxjson') {
            data = { "questions": ["(1)您精力充沛吗？（指精神头足，乐于做事）", "(2)您容易疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累）", "(3)您容易气短，呼吸短促，接不上气吗？", "(4)您说话声音低弱无力吗？（指说话没有力气）", "(5)您感到闷闷不乐、情绪低沉吗？（指心情不愉快，情绪低落）", "(6)您容易精神紧张、焦虑不安吗？（指遇事是否心情紧张）", "(7)您因为生活状态改变而感到孤独、失落吗？", "(8)您容易感到害怕或受到惊吓吗？", "(9)您感到身体超重不轻松吗？(感觉身体沉重)[BMI指数=体重（kg）/身高2（m）]|BMI<24|24-25之间|25-26之间|26-28之间|BMI≥28", "(10)您眼睛干涩吗？", "(11)您手脚发凉吗？（不包含因周围温度低或穿的少导致的手脚发冷）", "(12)您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）", "(13)您比一般人耐受不了寒冷吗？（指比别人容易害怕冬天或是夏天的冷空调、电扇等）", "(14)您容易患感冒吗？（指每年感冒的次数）|小于2次|感冒2-4次|感冒5-6次|8次以上|每月都感冒", "(15)您没有感冒时也会鼻塞、流鼻涕吗？", "(16)您有口粘口腻，或睡眠打鼾吗？", "(17)您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗？|从来没有|一年1、2次|一年3、4次|一年5、6次|上述都过敏", "(18)您的皮肤容易起荨麻疹吗？(包括风团、风疹块、风疙瘩)", "(19)您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗？（指皮肤在没有外伤的情况下出现青一块紫一块的情况）", "(20)您的皮肤一抓就红，并出现抓痕吗？（指被指甲或钝物划过后皮肤的反应）", "(21)您皮肤或口唇干吗？", "(22)您有肢体麻木或固定部位疼痛的感觉吗？", "(23)您面部或鼻部有油腻感或者油亮发光吗？（指脸上或鼻子）", "(24)您面色或目眶晦黯，或出现褐色斑块/斑点吗？", "(25)您有皮肤湿疹、疮疖吗？", "(26)您感到口干咽燥、总想喝水吗？", "(27)您感到口苦或嘴里有异味吗？（指口苦或口臭）", "(28)您腹部肥大吗？（指腹部脂肪肥厚）|80cm相当于2.4.尺|80-85cm或2.4-2.55尺|86-90cm或2.56-2.7尺|91-105cm或2.71-3.15尺|大于105cm或3.15尺", "(29)您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？（指不喜欢吃凉的食物，或吃了凉的食物后会不舒服）", "(30)您有大便黏滞不爽、解不尽的感觉吗？(大便容易粘在马桶或便坑壁上)", "(31)您容易大便干燥吗？", "(32)您舌苔厚腻或有舌苔厚厚的感觉吗？（如果自我感觉不清楚可由调查员观察后填写）", "(33)您舌下静脉瘀紫或增粗吗？（可由调查员辅助观察后填写）"], "pinghe": [1, -2, -4, -5, -13], "qixu": [2, 3, 4, 14], "yangxu": [11, 12, 13, 29], "yinxu": [10, 21, 26, 31], "tanshi": [9, 16, 28, 32], "shire": [23, 25, 27, 30], "xueyu": [19, 22, 24, 33], "qiyu": [5, 6, 7, 8], "tebing": [15, 17, 18, 20] };
        }
        else if (fun == 'addinventoryinfo') {
            data = { "auditDate": "", "blockContent": "", "cId": "", "createdOnUTC": 1540194666448, "creator": "", "customerCode": "customer1540194338874", "gwauditDate": "", "inventoryCode": "inventory1540194666448", "isAudit": "0", "isDelete": "0", "isupload": "0", "jieqiContent": "", "mainPhysical": "", "mainPhysicalScore": 0, "modifier": "", "pingheScore": 50, "pingheType": "0", "promptContent": "", "qixuScore": 0, "qixuType": "0", "qiyuScore": 0, "qiyuType": "0", "question1": "1", "question10": "2", "question11": "1", "question12": "2", "question13": "1", "question14": "2", "question15": "1", "question16": "2", "question17": "1", "question18": "2", "question19": "1", "question2": "2", "question20": "1", "question21": "2", "question22": "1", "question23": "2", "question24": "1", "question25": "2", "question26": "1", "question27": "2", "question28": "1", "question29": "2", "question3": "1", "question30": "2", "question31": "1", "question32": "2", "question33": "1", "question34": "2", "question35": "1", "question36": "2", "question37": "1", "question38": "2", "question39": "1", "question4": "2", "question40": "1", "question41": "2", "question42": "1", "question43": "2", "question44": "1", "question45": "2", "question46": "1", "question47": "2", "question48": "1", "question49": "2", "question5": "1", "question50": "2", "question51": "1", "question52": "2", "question53": "1", "question54": "2", "question55": "1", "question56": "2", "question57": "1", "question58": "2", "question59": "1", "question6": "2", "question60": "1", "question7": "2", "question8": "1", "question9": "2", "reportType": "60", "shireScore": 0, "shireType": "0", "tanshiScore": 0, "tanshiType": "0", "tebingScore": 0, "tebingType": "0", "testDate": "", "upFlag": "0", "updatedOnUTC": 1540194666448, "xueyuScore": 0, "xueyuType": "0", "yangxuScore": 0, "yangxuType": "0", "yinxuScore": 0, "yinxuType": "0", "ysjyContent": "" }
        }
        window[success](JSON.stringify(data));
        //Android.run(fun, JSON.stringify(params), success, error);
        //Android.run("activition", JSON.stringify({ code: "12sdada122" }), 'success', '$error');
    }, loadShow() {
        Android.run('loadshow');
    },
    loadHide() {
        Android.run('loadHide');
    }
}