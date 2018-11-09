

export default {
    run(fun, params, success, error = 'window.$error') {
        console.log("log from js");

        console.log(fun, params, success, error);
        let data = {};
        if (fun == 'getDeviceInfo') {
            data = { "activeCode": "df812e918d0c47db90391a66a0b8d616123", "deviceType": "Lenovo TB-X804F", "dpi": "1.5", "enterpriseIdentification": "ENT-001-001-002", "enterpriseName": "一级分公司1子公司2", "enterpriseUrl": "http://47.92.160.74/api", "imei": "", "systemVersion": "7.1.1" }
            //data = {};
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
                    "birth": "1971-01-01", "custOrgProvince": 110000,
                    "custOrgCity": 110100, 'marriage': 1, "cCardType": "101", "cId": "0", "cName": "2222", "contactAddress": "22345", "createdOnUTC": 1540310400000, "creator": "", "customerCode": "customer1540292134370", "fixedTel": " ", "haveGwreport": "1", "haveReport": "0", "isAudit": "0", "isDelete": "0", "isExport": "0", "isUpload": "0", "mobileTel": "2345676543212345432", "modifier": "", "nation": "汉", "sex": "0", "uCardNum": "123456", "updatedOnUTC": 1540300907309, "userCode": "user1540290320735"
                }, { "birth": "1984-01-01", "cCardType": "101", "cId": "0", "cName": "asdad", "contactAddress": "asdasdasd", "createdOnUTC": 1540295199271, "creator": "", "customerCode": "customer1540295199271", "fixedTel": " ", "haveGwreport": "0", "haveReport": "0", "isAudit": "0", "isDelete": "0", "isExport": "0", "isUpload": "0", "mobileTel": "123123123", "modifier": "", "nation": "满", "sex": "1", "uCardNum": "adadadasdasd", "updatedOnUTC": 1540295199271, "userCode": "user1540290320735" }, { "birth": "1990-01-01", "cCardType": "101", "cId": "0", "cName": "ddd", "contactAddress": "adad", "createdOnUTC": 1540295707499, "creator": "", "customerCode": "customer1540295707499", "fixedTel": " ", "haveGwreport": "1", "haveReport": "0", "isAudit": "0", "isDelete": "0", "isExport": "0", "isUpload": "0", "mobileTel": "13000000000", "modifier": "", "nation": "汉", "sex": "1", "uCardNum": "123123123123", "updatedOnUTC": 1540295707499, "userCode": "user1540290320735" }, { "birth": "1976-01-01", "cCardType": "101", "cId": "0", "cName": "测试", "contactAddress": "ddddddd", "createdOnUTC": 1540302418213, "creator": "", "customerCode": "customer1540302418213", "fixedTel": " ", "haveGwreport": "1", "haveReport": "0", "isAudit": "0", "isDelete": "0", "isExport": "0", "isUpload": "0", "mobileTel": "18611441173", "modifier": "", "nation": "汉", "sex": "1", "uCardNum": "123123123123123", "updatedOnUTC": 1540302418213, "userCode": "user1540290320735" }, { "birth": "1979-01-01", "cCardType": "101", "cId": "0", "cName": "ceshi2", "contactAddress": "222", "createdOnUTC": 1540302930787, "creator": "", "customerCode": "customer1540302930787", "fixedTel": " ", "haveGwreport": "0", "haveReport": "0", "isAudit": "0", "isDelete": "0", "isExport": "0", "isUpload": "0", "mobileTel": "18611441173", "modifier": "", "nation": "han", "sex": "0", "uCardNum": "22222", "updatedOnUTC": 1540302930787, "userCode": "user1540290320735" }]
            };
            //data = { customerInfoList: [] }
        }
        else if (fun == 'gethxjson') {
            data = { "questions": ["(1)您精力充沛吗？", "(2)您容易疲乏吗？", "(3)您容易气短(呼吸短促，接不上气)吗？", "(4)您容易心慌吗？", "(5)您容易头晕或站起时眩晕吗？", "(6)您喜欢安静、懒得说话吗？", "(7)您说话声音低弱无力吗？", "(8)您容易忘事（健忘）吗？", "(9)您感到闷闷不乐、情绪低沉吗？", "(10)您多愁善感、感情脆弱吗？", "(11)您容易精神紧张、焦虑不安吗？", "(12)您容易感到害怕或受到惊吓吗？", "(13)您肋胁部或乳房胀痛吗？", "(14)您感到胸闷或腹部胀满吗？", "(15)您无缘无故叹气吗？", "(16)您感到身体沉重不轻松或不爽快吗？", "(17)您感到手脚心发热吗？", "(18)您感觉身体、脸上发热吗？", "(19)您手脚发凉吗？", "(20)您胃脘部、背部或腰膝部怕冷吗？", "(21)您比一般人耐受不了寒冷(冬天的寒冷，夏天的冷空调、电扇等)吗？", "(22)您感到怕冷、衣服比别人穿的多吗？", "(23)您比别人容易患感冒吗？", "(24)您没有感冒时也会打喷嚏吗？", "(25)您没有感冒时也会鼻塞、流鼻涕吗？", "(26)您活动量稍大就容易出虚汗吗？", "(27)您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？", "(28)您皮肤容易起荨麻疹(风团、风疹块、风疙瘩)及抓痕吗？", "(29)您有因季节变化、温度变化或异味等原因而咳喘的现象吗？", "(30)您的皮肤因过敏出现过紫癜(紫红色瘀点、瘀斑)吗？", "(31)您的皮肤一抓就红，并出现抓痕吗？", "(32)您的皮肤在不知不觉中会出现青紫瘀斑(皮下出血)吗？", "(33)您皮肤或口唇干吗？", "(34)您身体上有哪里疼痛吗？", "(35)您面部两颧潮红或偏红吗？", "(36)您两颧部有细微红丝吗？", "(37)您口唇的颜色比一般人红吗？", "(38)您有额部油脂分泌多的现象吗？", "(39)您面部或鼻部有油腻感或者油光发亮吗？", "(40)您面色晦暗、或容易出现褐斑吗？", "(41)您易生痤疮或者疮疖吗？", "(42)您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗？", "(43)您容易有黑眼圈吗？", "(44)您感到眼睛干涩吗？", "(45)您口唇颜色偏黯吗？", "(46)您感到口干咽燥、总想喝水吗？", "(47)您咽喉部有异物感，且吐之不出、咽之不下吗？", "(48)您平时痰多，特别是咽喉部总有痰堵着吗？", "(49)您感到口苦或嘴里有异味吗？", "(50)您嘴里常有黏黏的感觉吗？", "(51)您舌苔厚腻或有舌苔厚厚的感觉吗？", "(52)您腹部肥满松软吗？", "(53)您受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？", "(54)您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉的东西吗？", "(55)您容易失眠吗？", "(56)您有大便粘滞不爽、解不尽的感觉吗？", "(57)您容易便秘或大便干燥吗？", "(58)您小便时尿道有发热感、尿色浓(深)吗？", "(59)您带下色黄(白带颜色发黄)吗？（限女性回答）/您的阴囊部位潮湿吗？（限男性回答）", "(60)您能适应外界自然和社会环境的变化吗？"], "pinghe": [1, 60, -7, -23, -21, -8, -55], "qixu": [2, 3, 23, 7, 26, 6, 4], "yangxu": [20, 21, 53], "yinxu": [17, 44, 46, 35], "tanshi": [42, 39, 51, 48, 14, 16], "shire": [39, 41, 49, 50, 56, 57, 58, 59], "xueyu": [32, 40, 45, 34, 43], "qiyu": [9, 11, 47, 15, 13], "tebing": [25, 27, 28, 30] }
        }
        else if (fun == 'getgwjson') {
            data = { "questions": ["(1)您精力充沛吗？（指精神头足，乐于做事）", "(2)您容易疲乏吗？（指体力如何，是否稍微活动一下或做一点家务劳动就感到累）", "(3)您容易气短，呼吸短促，接不上气吗？", "(4)您说话声音低弱无力吗？（指说话没有力气）", "(5)您感到闷闷不乐、情绪低沉吗？（指心情不愉快，情绪低落）", "(6)您容易精神紧张、焦虑不安吗？（指遇事是否心情紧张）", "(7)您因为生活状态改变而感到孤独、失落吗？", "(8)您容易感到害怕或受到惊吓吗？", "(9)您感到身体超重不轻松吗？(感觉身体沉重)[BMI指数=体重（kg）/身高2（m）]|BMI<24|24-25之间|25-26之间|26-28之间|BMI≥28", "(10)您眼睛干涩吗？", "(11)您手脚发凉吗？（不包含因周围温度低或穿的少导致的手脚发冷）", "(12)您胃脘部、背部或腰膝部怕冷吗？（指上腹部、背部、腰部或膝关节等，有一处或多处怕冷）", "(13)您比一般人耐受不了寒冷吗？（指比别人容易害怕冬天或是夏天的冷空调、电扇等）", "(14)您容易患感冒吗？（指每年感冒的次数）|小于2次|感冒2-4次|感冒5-6次|8次以上|每月都感冒", "(15)您没有感冒时也会鼻塞、流鼻涕吗？", "(16)您有口粘口腻，或睡眠打鼾吗？", "(17)您容易过敏(对药物、食物、气味、花粉或在季节交替、气候变化时)吗？|从来没有|一年1、2次|一年3、4次|一年5、6次|上述都过敏", "(18)您的皮肤容易起荨麻疹吗？(包括风团、风疹块、风疙瘩)", "(19)您的皮肤在不知不觉中会出现青紫瘀斑、皮下出血吗？（指皮肤在没有外伤的情况下出现青一块紫一块的情况）", "(20)您的皮肤一抓就红，并出现抓痕吗？（指被指甲或钝物划过后皮肤的反应）", "(21)您皮肤或口唇干吗？", "(22)您有肢体麻木或固定部位疼痛的感觉吗？", "(23)您面部或鼻部有油腻感或者油亮发光吗？（指脸上或鼻子）", "(24)您面色或目眶晦黯，或出现褐色斑块/斑点吗？", "(25)您有皮肤湿疹、疮疖吗？", "(26)您感到口干咽燥、总想喝水吗？", "(27)您感到口苦或嘴里有异味吗？（指口苦或口臭）", "(28)您腹部肥大吗？（指腹部脂肪肥厚）|80cm相当于2.4.尺|80-85cm或2.4-2.55尺|86-90cm或2.56-2.7尺|91-105cm或2.71-3.15尺|大于105cm或3.15尺", "(29)您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？（指不喜欢吃凉的食物，或吃了凉的食物后会不舒服）", "(30)您有大便黏滞不爽、解不尽的感觉吗？(大便容易粘在马桶或便坑壁上)", "(31)您容易大便干燥吗？", "(32)您舌苔厚腻或有舌苔厚厚的感觉吗？（如果自我感觉不清楚可由调查员观察后填写）", "(33)您舌下静脉瘀紫或增粗吗？（可由调查员辅助观察后填写）"], "pinghe": [1, -2, -4, -5, -13], "qixu": [2, 3, 4, 14], "yangxu": [11, 12, 13, 29], "yinxu": [10, 21, 26, 31], "tanshi": [9, 16, 28, 32], "shire": [23, 25, 27, 30], "xueyu": [19, 22, 24, 33], "qiyu": [5, 6, 7, 8], "tebing": [15, 17, 18, 20] };
        }
        else if (fun == 'addinventoryinfo') {
            data = { "auditDate": "", "blockContent": "", "cId": "", "createdOnUTC": 1540194666448, "creator": "", "customerCode": "customer1540194338874", "gwauditDate": "", "inventoryCode": "inventory1540194666448", "isAudit": "0", "isDelete": "0", "isupload": "0", "jieqiContent": "", "mainPhysical": "血瘀质,阳虚质,阴虚质,", "mainPhysicalScore": 0, "modifier": "", "pingheScore": 50, "pingheType": "0", "promptContent": "", "qixuScore": 0, "qixuType": "0", "qiyuScore": 0, "qiyuType": "0", "question1": "1", "question10": "2", "question11": "1", "question12": "2", "question13": "1", "question14": "2", "question15": "1", "question16": "2", "question17": "1", "question18": "2", "question19": "1", "question2": "2", "question20": "1", "question21": "2", "question22": "1", "question23": "2", "question24": "1", "question25": "2", "question26": "1", "question27": "2", "question28": "1", "question29": "2", "question3": "1", "question30": "2", "question31": "1", "question32": "2", "question33": "1", "question34": "2", "question35": "1", "question36": "2", "question37": "1", "question38": "2", "question39": "1", "question4": "2", "question40": "1", "question41": "2", "question42": "1", "question43": "2", "question44": "1", "question45": "2", "question46": "1", "question47": "2", "question48": "1", "question49": "2", "question5": "1", "question50": "2", "question51": "1", "question52": "2", "question53": "1", "question54": "2", "question55": "1", "question56": "2", "question57": "1", "question58": "2", "question59": "1", "question6": "2", "question60": "1", "question7": "2", "question8": "1", "question9": "2", "reportType": "60", "shireScore": 0, "shireType": "0", "tanshiScore": 0, "tanshiType": "0", "tebingScore": 0, "tebingType": "0", "testDate": "", "upFlag": "0", "updatedOnUTC": 1540194666448, "xueyuScore": 0, "xueyuType": "0", "yangxuScore": 0, "yangxuType": "0", "yinxuScore": 0, "yinxuType": "0", "ysjyContent": "" }
        }
        else if (fun == 'getinventoryinfo') {
            data = { "customerInventoryInfoList": [{ "auditDate": "", "blockContent": "", "cId": "", "createdOnUTC": 1540194286179, "creator": "", "customerCode": "", "gwauditDate": "", "inventoryCode": "inventory1540194286179", "isAudit": "0", "isDelete": "0", "isupload": "0", "jieqiContent": "", "mainPhysical": "血瘀质,阳虚质,阴虚质,", "mainPhysicalScore": 0, "modifier": "", "pingheScore": 0, "pingheType": "", "promptContent": "", "qixuScore": 0, "qixuType": "", "qiyuScore": 0, "qiyuType": "", "question1": "", "question10": "", "question11": "", "question12": "", "question13": "", "question14": "", "question15": "", "question16": "", "question17": "", "question18": "", "question19": "", "question2": "", "question20": "", "question21": "", "question22": "", "question23": "", "question24": "", "question25": "", "question26": "", "question27": "", "question28": "", "question29": "", "question3": "", "question30": "", "question31": "", "question32": "", "question33": "", "question34": "", "question35": "", "question36": "", "question37": "", "question38": "", "question39": "", "question4": "", "question40": "", "question41": "", "question42": "", "question43": "", "question44": "", "question45": "", "question46": "", "question47": "", "question48": "", "question49": "", "question5": "", "question50": "", "question51": "", "question52": "", "question53": "", "question54": "", "question55": "", "question56": "", "question57": "", "question58": "", "question59": "", "question6": "", "question60": "", "question7": "", "question8": "", "question9": "", "reportType": "", "shireScore": 0, "shireType": "", "tanshiScore": 0, "tanshiType": "", "tebingScore": 0, "tebingType": "", "testDate": "", "upFlag": "0", "updatedOnUTC": 1540194286179, "xueyuScore": 0, "xueyuType": "", "yangxuScore": 0, "yangxuType": "", "yinxuScore": 0, "yinxuType": "", "ysjyContent": "" }] }
        }
        else if (fun == 'ocr') {
            data = { "Name": { "value": "蒋飞成" }, "Sex": { "value": "男" }, "Folk": { "value": "满" }, "Birt": { "value": "1976年03月20日" }, "Addr": { "value": "湖南省邵阳县五峰铺镇白田村下尤铺组17号" }, "Num": { "value": "430523197603204314" }, "Issue": { "value": "" }, "Valid": { "value": "" }, "Type": { "value": "正面" }, "Cover": { "value": "无遮挡" } }
        }
        else if (fun == 'getknowledge') {
            data = {
                "knowledgeList": [
                    {
                        "content": "<table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:36px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">&nbsp; 您有易患<strong>慢性胃肠道疾病、哮喘、甲状腺功能减退症、风湿性关节炎、不孕症</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>用温阳益火的方法，恢复肾脏阳气，消退机体的阴寒之气。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\"><strong>食</strong>补调养</td><td>宜选食物</td><td>谷物类：黄豆 糯米 高粱 肉食类：羊肉 牛肉 蔬菜类：韭菜 刀豆 小茴香 果品类：核桃 龙眼肉 板栗 荔枝</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">少食梨、西瓜、荸荠等生冷寒凉的食物，少饮绿茶</td></tr><tr style=\\\"height:144px\\\"><td style=\\\"\\\">精选食谱</td><td width=\\\"680\\\" style=\\\"\\\"><p>八角焖牛腩</p><p>【配方】鲜牛腩200克，冬菇12克，八角2粒，花生油50克，姜、葱、精盐、味精、白糖、芝麻油、湿芡粉、胡椒粉、酱油、清汤各适量。</p><p>【功效】温阳散寒，理气止痛。</p><p>【用法】佐餐食用。</p><p>【制作】鲜牛腩200克，冬菇12克，八角2粒，花生油50克，姜、葱、精盐、味精、白糖、芝麻油、湿芡粉、胡椒粉、酱油、清汤各适量。</p><p>[制作]将牛腩切块，冬菇切片，八角洗净，姜切片，葱切段；将锅内放入花生油烧热，放入姜片、八角、冬菇、牛腩煸炒至水干，掺入清汤，调入精盐、味精、白糖、胡椒粉、酱油，用文火焖酥，汁浓时加入葱段，勾芡，淋入芝麻油即可。</p><p>茶姜散</p><p>【配方】红茶1.5克，荔枝干肉25克。</p><p>【制作】冲入沸水300毫升，浸泡5分钟即成，代茶饮。<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:90px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>注意保暖，春夏养阳</p><p>日光浴。阳虚质在春夏季节尤其要注意培补阳气，避免长时间待在空调房里，做到“无厌于日”。晒太阳每次不少于15～20分钟，以上午8～10时、下午4～7时为宜，晒太阳时避免完全暴露于阳光下，可在树荫下、湖边等进行。</p><p>盐水足浴。临睡前，在洗足水中加盐一匙，洗净后，用手擦涌泉穴（在足底部，卷足时足前部凹陷处），左右各擦几十至几百次。肾经从涌泉起始，盐能引经通肾，此法可助阳散寒。</p></td></tr><tr style=\\\"height:72px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>阳虚质者耐春夏不耐秋冬，秋冬季节要适当暖衣温食以养护阳气，尤其要注意腰部和下肢保暖。</p><p>夏季暑热多汗，也易导致阳气外泄，使阳气虚于内。建议尽量避免强力劳作和大汗，也不可恣意贪凉饮冷。</p><p>多在阳光充足的情况下适当进行户外活动，不可在阴暗潮湿寒冷的环境下长期工作和生活。</p><p>节制房事、节制手淫及意淫等习惯尤为重要。</p></td></tr><tr style=\\\"height:198px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“五禽戏”中的虎戏，以益肾阳强腰骨。</p><p>起式</p><p>脚后跟靠拢成立正姿势，两臂自然下垂，两眼平视前方。</p><p>左式&nbsp;</p><p>两腿屈膝下蹲，重心移至右腿，左脚虚步，脚掌点地、靠于右脚内踝处，同时两掌握拳提至腰两侧，拳心向上，眼看左前方。</p><p>左脚向左前方斜进一步，右脚随之跟进半步，重心坐于右腿，左脚掌虚步点地，同时两拳沿胸部上抬，拳心向后，抬至口前两拳相对翻转变掌向前按出，高与胸齐，掌心向前，两掌虎口相对，眼看左手。</p><p>右式</p><p>左脚向前迈出半步，右脚随之跟至左脚内踝处，重心坐于左腿，右脚掌虚步点地，两腿屈膝，同时两掌变拳撤至腰两侧，拳心向上，眼看右前方。</p><p>右脚向右前方斜进一步，左脚随之跟进半步，重心坐于左腿，右脚掌虚步点地，同时两拳沿胸部上抬，拳心向后，抬至口前两拳相对翻转变掌向前按出，高与胸齐，掌心向前，两掌虎口相对，眼看右手。</p><p>如此反复左右虎扑，次数不限。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可根据自身情况及喜好选择功法。每周可练习2～3次，每次一遍。</p></td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>夏天不宜做剧烈运动。</p><p>冬天避免在大风、大寒、大雾、大雪及空气污染的环境中锻炼。&lt;/p&gt;</p></td></tr><tr style=\\\"height:162px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:脾俞</p><p>位置：在背部，当第十一胸椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp;</p><p>功能：健脾利湿，益气和中。&nbsp;</p><p>主治：背痛、腹胀、腹泻、呕吐、痢疾、便血等脾胃肠腑病证</p><p>方法：艾灸、按揉、穴位敷贴</p><p>&nbsp; &nbsp; 名称:气海</p><p>位置：位于体前正中线，脐下1寸半。</p><p>经脉：任脉</p><p>功能：生发阳气</p><p>主治：虚脱、形体赢瘦、脏气衰惫、乏力等气虚病证；水谷不化、绕脐疼痛、腹泻、痢疾、便秘等肠腑病证；小便不利、遗尿；遗精、阳痿、疝气。</p><p>方法：按摩、艾灸、穴位敷贴</p><p>&nbsp; &nbsp; 名称:肾俞</p><p>位置：在腰部，当第二腰椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp;</p><p>功能：滋阴壮阳，补肾益气，利水消肿。</p><p>主治：腰痛、肾脏病、高血压、低血压、耳鸣、精力减退等</p><p>方法：艾灸、按摩、穴位敷贴</p></td></tr></tbody></table><p><br/></p><table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:18px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">&nbsp;您有易患<strong>复发性口疮、慢性咽炎、习惯性便秘、失眠</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>滋养人体肝肾之阴，达到养阴液、降虚火的作用。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\">食补调养</td><td>宜选食物</td><td>谷物类：黑芝麻 黑大豆 绿豆 小麦 肉食类：螃蟹 鸭肉 虾肉 甲鱼 海参 蔬菜类：百合 银耳 黄瓜 果品类：甘蔗 梨 西瓜</td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">少食温燥、辛辣、香浓的食物，如羊肉、狗肉、韭菜、茴香、辣椒、葵花籽、酒、咖啡、浓茶等性温燥烈之品，也不宜多食祛湿类食物，如冬瓜、木瓜、扁豆、薏苡仁、鲫鱼等。</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">精选食谱</td><td><br/></td></tr><tr style=\\\"height:108px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>保证充足的睡眠，保水保湿。</p><p>睡子午觉。睡眠质量最高的时间应该是晚上11点到凌晨1点（子时）和中午11点到1点（午时），中医称为“子午觉”。古人认为，这个时间是阴阳盛衰转化的时候，人体应该入静，以适应自然界的变化，尤其是子时入静更为重要。睡子午觉有利于养阴。</p><p>吞津练精养生法。每天早晨起来，微微闭上嘴唇，将舌尖顶住上颚，感到口腔里的唾液逐渐分泌出来，当唾液增加到一定量时，一边心里想着“滋补津液”，一边将口中津液缓缓吞下，反复3～5次，长期坚持，可以起到滋阴养液的作用。</p></td></tr><tr style=\\\"height:54px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>工作紧张、熬夜、剧烈运动、高温酷暑的工作生活环境等能加重阴虚倾向，应尽量避免。</p><p>房事养生以节欲保精为要。房事过度会导致阴精耗伤，因此，阴虚质者尤当节制房事，欲不可早，欲不可纵。戒除手淫意淫，避免色情刺激。</p></td></tr><tr style=\\\"height:360px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“六字诀”中的“吹”字功，常练可以固肾气，壮筋骨。</p><p>发音: 吹（chuī）。&nbsp; &nbsp;</p><p>口型: 撮口，两嘴角向后咧，舌尖微向上翘。&nbsp;&nbsp;</p><p>动作：</p><p>预备式</p><p>两脚平行站立，约与肩同宽，两膝微屈；头正颈直，下颌微收，竖脊含胸；两臂自然下垂，周身中正；唇齿合拢，舌尖放平，轻贴上颚；目视前下方。</p><p>起势</p><p>动作一：曲肘，两掌十指相对，掌心向上，缓缓上托至胸前，约与两乳同高；目视前方；</p><p>动作二：两掌内翻，掌心向下，缓缓下按，至肚脐前；目视前下方；</p><p>动作三：微屈膝下蹲，身体后坐；同时两掌内旋，缓缓向前拨出，至两臂成圆；</p><p>动作四：两掌外旋内翻，掌心向内。起身，两缓缓收拢至肚脐前，虎口交叉相握轻覆肚脐；静养片刻，自然呼吸；目视前下方。</p><p>吹（chuī）字诀</p><p>动作一：两掌前推，随后松腕伸掌，指尖向前，掌心向下。</p><p>动作二：两臂向左右分开成侧平举，掌心斜向后，指尖向外。</p><p>动作三：两臂内旋，两掌向后划弧至腰部，掌心轻贴腰眼，指尖斜向下；目视前下方。</p><p>动作四：微屈膝下蹲；同时两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。两掌从腰部下滑时，口吐“吹”字音。&lt;br &nbsp; /&gt;动作五：两膝缓缓伸直；同时，两掌缓缓收回，轻抚腹部，指尖斜向下，虎口相对；目视前下方。</p><p>动作六：两掌沿带脉向后摩运。</p><p>动作七：两掌至后腰部，掌心轻贴腰眼，指尖斜向下；目视前方。</p><p>动作八：微屈膝下蹲；同时，两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。</p><p>重复五至八动4遍。本式共吐“吹”字音6次。</p><p>动作要点</p><p>吹”字吐气法：“吹”字音为唇音。发声吐气时，舌体、嘴角后引，槽牙相对，两唇向两侧拉开收紧，气从喉出后，从舌两边绕舌下，经唇间缓缓呼出体外；两掌从腰部下滑、环抱于腹前时呼气，口吐“吹”字音；两掌向后收回、横摩至腰时以鼻吸气。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>根据自身情况和喜好进行锻炼。一般一周3～5次，每次30分钟以上。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>不宜进行剧烈运动，避免大强度、大运动量的锻炼形式，避免在炎热的夏天或闷热的环境中运动，以免出汗过多，损伤阴液。</p><p>不宜去桑拿。</p></td></tr><tr style=\\\"height:162px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:涌泉</p><p>位置：在足底部，卷足时足前部凹陷处，约当第2、3趾趾指缝纹头端与足跟连线的前1/3与后2/3交点上。 &nbsp;&nbsp;</p><p>经脉：足少阴肾经</p><p>功能：益肾填精。</p><p>主治：神经衰弱、精力减退、倦怠感、失眠、多眠症、高血压、晕眩、焦躁、糖尿病、过敏性鼻炎、更年期障碍、怕冷症、肾脏病、下肢瘫痪、头顶痛、咽喉痛、失音、舌干、癫痫、神经性头痛、三叉神经病、精神分裂症等。</p><p>方法：按摩、艾灸、穴位敷贴&nbsp;</p><p>名称:三阴交</p><p>位置：在小腿内侧，当足内踝尖上3寸，胫骨内侧缘后方。</p><p>经脉：足太阴脾经&nbsp; &nbsp;</p><p>功能：调补肝肾，行气活血，疏经通络。</p><p>主治：脾胃虚弱，消化不良，腹胀肠鸣，腹泻，遗精，阳痿，阴茎中痛，水肿，小便不利，遗尿，膝脚痹痛，脚气，失眠，湿疹，荨麻疹，神经性皮炎，高血压病等</p><p>方法：按摩、艾灸、穴位敷贴</p></td></tr></tbody></table><p><br/></p><table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:18px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">您有易患<strong>感冒、疲劳综合征、贫血</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>补益人体肾、脾、肺三脏，使人体之气充沛，增强抵御外邪的能力。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\">食补调养</td><td>宜选食物</td><td>谷物类：小麦 粳米 糯米 肉食类：牛肉 鲫鱼 猪肚 蔬菜类：香菇 胡萝卜 山药 果品类：核桃 大枣 梨 葡萄</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">平时应少食具有耗气作用的食物，如槟榔、空心菜、生萝卜等</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">精选食谱</td><td><br/></td></tr><tr style=\\\"height:72px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>起居勿过劳，适当进行益气升提的活动</p><p>呼气提肛法。明代“养生十六宜”指出“谷道宜常撮”，谷道指肛门。首先吸气收腹，收缩并提升肛门，停顿2～3秒之后，再缓慢放松呼气，如此反复10～15次。</p><p>适度活动。中医讲“久卧伤气”，躺的时间过久也会导致气的耗伤，故建议适当运动。脾主四肢，为后天之本</p></td></tr><tr style=\\\"height:54px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>注意保暖：气虚质者卫阳不足，易于感受外邪，应注意保暖，不要劳汗当风，防止外邪侵袭</p><p>避免劳累：劳则气耗，气虚质者尤当注意不可过于劳作，以免更伤正气。</p><p>节制房事：应注意性事期间寒温适宜，节制房事，保持乐观愉快的心理状态。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:360px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“六字诀”中的“吹”字功，常练可以固肾气，壮筋骨。</p><p>发音: 吹（chuī）。&nbsp;&nbsp;</p><p>口型: 撮口，两嘴角向后咧，舌尖微向上翘。</p><p>动作：</p><p>预备式</p><p>两脚平行站立，约与肩同宽，两膝微屈；头正颈直，下颌微收，竖脊含胸；两臂自然下垂，周身中正；唇齿合拢，舌尖放平，轻贴上颚；目视前下方。</p><p>起势</p><p>动作一：曲肘，两掌十指相对，掌心向上，缓缓上托至胸前，约与两乳同高；目视前方；</p><p>动作二：两掌内翻，掌心向下，缓缓下按，至肚脐前；目视前下方；</p><p>动作三：微屈膝下蹲，身体后坐；同时两掌内旋，缓缓向前拨出，至两臂成圆；</p><p>动作四：两掌外旋内翻，掌心向内。起身，两缓缓收拢至肚脐前，虎口交叉相握轻覆肚脐；静养片刻，自然呼吸；目视前下方。</p><p>吹（chuī）字诀&lt;br /&gt;动作一:两掌前推，随后松腕伸掌，指尖向前，掌心向下。</p><p>动作二:两臂向左右分开成侧平举，掌心斜向后，指尖向外。</p><p>动作三:两臂内旋，两掌向后划弧至腰部，掌心轻贴腰眼，指尖斜向下；目视前下方。</p><p>动作四:微屈膝下蹲；同时两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。两掌从腰部下滑时，口吐“吹”字音。</p><p>动作五:两膝缓缓伸直；同时，两掌缓缓收回，轻抚腹部，指尖斜向下，虎口相对；目视前下方。</p><p>动作六:两掌沿带脉向后摩运。</p><p>动作七:两掌至后腰部，掌心轻贴腰眼，指尖斜向下；目视前方。</p><p>动作八:微屈膝下蹲；同时，两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。</p><p>重复五至八动4遍。本式共吐“吹”字音6次。</p><p>动作要点</p><p>“吹”字吐气法：“吹”字音为唇音。发声吐气时，舌体、嘴角后引，槽牙相对，两唇向两侧拉开收紧，气从喉出后，从舌两边绕舌下，经唇间缓缓呼出体外；两掌从腰部下滑、环抱于腹前时呼气，口吐“吹”字音；两掌向后收回、横摩至腰时以鼻吸气。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>根据自身情况和喜好进行锻炼。一般一周3次，每次30分钟至1小时。</p></td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>不宜做大负荷运动，忌用猛力和做长久憋气的动作，以免耗损元气。</p><p>不宜汗出过多。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:180px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:足三</p><p>位置：在小腿前外侧，当犊鼻下3寸，距胫骨前缘一横指（中指）&nbsp; &nbsp;</p><p>经脉：足阳明胃经</p><p>功能：健脾和胃，调理气血，通经活络，扶正培元。本穴有强壮作用，为保健要穴。</p><p>主治：胃痛、呕吐、腹胀、肠鸣、消化不良、下肢痿痹、泄泻、便秘、痢疾、疳积、癫狂、中风、脚气、水肿、下肢不遂、心悸、气短、虚劳羸瘦。</p><p>方法：艾灸、按揉、穴位敷贴</p><p>名称:脾俞</p><p>位置：在背部，当第十一胸椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp; &nbsp;</p><p>功能：健脾利湿，益气和中。&nbsp;</p><p>主治：背痛、腹胀、腹泻、呕吐、痢疾、便血等脾胃肠腑病证</p><p>方法：艾灸、按揉、穴位敷贴</p><p>名称:气海</p><p>位置：位于体前正中线，脐下1寸半。</p><p>经脉：任脉</p><p>功能：生发阳气</p><p>主治：虚脱、形体赢瘦、脏气衰惫、乏力等气虚病证；水谷不化、绕脐疼痛、腹泻、痢疾、便秘等肠腑病证；小便不利、遗尿；遗精、阳痿、疝气。</p><p>方法：按摩、艾灸、穴位敷贴。</p></td></tr></tbody></table><p><br/></p>",
                        "createdOnUTC": 1541666233833,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "b433cf55f1fe4f97913a285f7a69fa2e",
                        "modifier": "",
                        "type": "1",
                        "updatedOnUTC": 1541666233833,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p>立冬为冬季的第一个节气，此时草木凋零，万物活动趋向休止，宜养精蓄锐，为来春生机勃发作储备。<br/>对于人体而言，由于天气寒冷，需要进补更多的能量食物以抵御寒邪的侵袭。<br/>立冬后的起居要早睡晚起，保证充足睡眠，避免过度劳累，并注意背部保暖，有利于阳气潜藏。<br/>同时还要适度运动，如散步等。</p>",
                        "createdOnUTC": 1541666233879,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "20b4676f913c4c9787abfa584ffec56a",
                        "modifier": "",
                        "type": "2",
                        "updatedOnUTC": 1541666233879,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: right;\\\"><span style=\\\"text-align: center;\\\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;医生签名</span><br/></p>",
                        "createdOnUTC": 1541666233926,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "9744c1aac81841fc8021a1cbcd0f29ba",
                        "modifier": "",
                        "type": "3",
                        "updatedOnUTC": 1541666233926,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p>如您已患某种疾病，请您遵医嘱接受治疗和调护<br/>若已患糖尿病、高脂血症、痛风、肥胖等疾病，应遵照相应的膳食规。如:<br/>糖尿病少高糖类食物；<br/>高脂血症及肥胖应少食高胆固醇、高糖、高脂肪食物；<br/>痛风禁食海鲜类嘌呤含量较高的食物；<br/>根据体质的易患疾病，请您提高警惕，防患于未然，定期进行相关检查；若有其它疑问，欢迎致 “KY3H全国客服电话” （86）4008118899或访问www.eky3h.com进行咨询，为了便于您更有效地管理自己的健康状况，我们在KY3H健康网（www.eky3h.com）为您提供了更加丰富的健康管理工具及体质调理产品，欢迎您登陆。</p>",
                        "createdOnUTC": 1541666233948,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "004ef67f3fcc406fafc1ba8b65206cb4",
                        "modifier": "",
                        "type": "4",
                        "updatedOnUTC": 1541666233948,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:18px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">您有易患<strong>感冒、疲劳综合征、贫血</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>补益人体肾、脾、肺三脏，使人体之气充沛，增强抵御外邪的能力。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\">食补调养</td><td>宜选食物</td><td>谷物类：小麦 粳米 糯米 肉食类：牛肉 鲫鱼 猪肚 蔬菜类：香菇 胡萝卜 山药 果品类：核桃 大枣 梨 葡萄</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">平时应少食具有耗气作用的食物，如槟榔、空心菜、生萝卜等</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">精选食谱</td><td><br/></td></tr><tr style=\\\"height:72px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>起居勿过劳，适当进行益气升提的活动</p><p>呼气提肛法。明代“养生十六宜”指出“谷道宜常撮”，谷道指肛门。首先吸气收腹，收缩并提升肛门，停顿2～3秒之后，再缓慢放松呼气，如此反复10～15次。</p><p>适度活动。中医讲“久卧伤气”，躺的时间过久也会导致气的耗伤，故建议适当运动。脾主四肢，为后天之本</p></td></tr><tr style=\\\"height:54px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>注意保暖：气虚质者卫阳不足，易于感受外邪，应注意保暖，不要劳汗当风，防止外邪侵袭</p><p>避免劳累：劳则气耗，气虚质者尤当注意不可过于劳作，以免更伤正气。</p><p>节制房事：应注意性事期间寒温适宜，节制房事，保持乐观愉快的心理状态。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:360px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“六字诀”中的“吹”字功，常练可以固肾气，壮筋骨。</p><p>发音: 吹（chuī）。&nbsp;&nbsp;</p><p>口型: 撮口，两嘴角向后咧，舌尖微向上翘。</p><p>动作：</p><p>预备式</p><p>两脚平行站立，约与肩同宽，两膝微屈；头正颈直，下颌微收，竖脊含胸；两臂自然下垂，周身中正；唇齿合拢，舌尖放平，轻贴上颚；目视前下方。</p><p>起势</p><p>动作一：曲肘，两掌十指相对，掌心向上，缓缓上托至胸前，约与两乳同高；目视前方；</p><p>动作二：两掌内翻，掌心向下，缓缓下按，至肚脐前；目视前下方；</p><p>动作三：微屈膝下蹲，身体后坐；同时两掌内旋，缓缓向前拨出，至两臂成圆；</p><p>动作四：两掌外旋内翻，掌心向内。起身，两缓缓收拢至肚脐前，虎口交叉相握轻覆肚脐；静养片刻，自然呼吸；目视前下方。</p><p>吹（chuī）字诀&lt;br /&gt;动作一:两掌前推，随后松腕伸掌，指尖向前，掌心向下。</p><p>动作二:两臂向左右分开成侧平举，掌心斜向后，指尖向外。</p><p>动作三:两臂内旋，两掌向后划弧至腰部，掌心轻贴腰眼，指尖斜向下；目视前下方。</p><p>动作四:微屈膝下蹲；同时两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。两掌从腰部下滑时，口吐“吹”字音。</p><p>动作五:两膝缓缓伸直；同时，两掌缓缓收回，轻抚腹部，指尖斜向下，虎口相对；目视前下方。</p><p>动作六:两掌沿带脉向后摩运。</p><p>动作七:两掌至后腰部，掌心轻贴腰眼，指尖斜向下；目视前方。</p><p>动作八:微屈膝下蹲；同时，两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。</p><p>重复五至八动4遍。本式共吐“吹”字音6次。</p><p>动作要点</p><p>“吹”字吐气法：“吹”字音为唇音。发声吐气时，舌体、嘴角后引，槽牙相对，两唇向两侧拉开收紧，气从喉出后，从舌两边绕舌下，经唇间缓缓呼出体外；两掌从腰部下滑、环抱于腹前时呼气，口吐“吹”字音；两掌向后收回、横摩至腰时以鼻吸气。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>根据自身情况和喜好进行锻炼。一般一周3次，每次30分钟至1小时。</p></td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>不宜做大负荷运动，忌用猛力和做长久憋气的动作，以免耗损元气。</p><p>不宜汗出过多。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:180px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:足三</p><p>位置：在小腿前外侧，当犊鼻下3寸，距胫骨前缘一横指（中指）&nbsp; &nbsp;</p><p>经脉：足阳明胃经</p><p>功能：健脾和胃，调理气血，通经活络，扶正培元。本穴有强壮作用，为保健要穴。</p><p>主治：胃痛、呕吐、腹胀、肠鸣、消化不良、下肢痿痹、泄泻、便秘、痢疾、疳积、癫狂、中风、脚气、水肿、下肢不遂、心悸、气短、虚劳羸瘦。</p><p>方法：艾灸、按揉、穴位敷贴</p><p>名称:脾俞</p><p>位置：在背部，当第十一胸椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp; &nbsp;</p><p>功能：健脾利湿，益气和中。&nbsp;</p><p>主治：背痛、腹胀、腹泻、呕吐、痢疾、便血等脾胃肠腑病证</p><p>方法：艾灸、按揉、穴位敷贴</p><p>名称:气海</p><p>位置：位于体前正中线，脐下1寸半。</p><p>经脉：任脉</p><p>功能：生发阳气</p><p>主治：虚脱、形体赢瘦、脏气衰惫、乏力等气虚病证；水谷不化、绕脐疼痛、腹泻、痢疾、便秘等肠腑病证；小便不利、遗尿；遗精、阳痿、疝气。</p><p>方法：按摩、艾灸、穴位敷贴。</p></td></tr></tbody></table><p><br/></p><table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:36px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">&nbsp; 您有易患<strong>慢性胃肠道疾病、哮喘、甲状腺功能减退症、风湿性关节炎、不孕症</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>用温阳益火的方法，恢复肾脏阳气，消退机体的阴寒之气。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\"><strong>食</strong>补调养</td><td>宜选食物</td><td>谷物类：黄豆 糯米 高粱 肉食类：羊肉 牛肉 蔬菜类：韭菜 刀豆 小茴香 果品类：核桃 龙眼肉 板栗 荔枝</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">少食梨、西瓜、荸荠等生冷寒凉的食物，少饮绿茶</td></tr><tr style=\\\"height:144px\\\"><td style=\\\"\\\">精选食谱</td><td width=\\\"680\\\" style=\\\"\\\"><p>八角焖牛腩</p><p>【配方】鲜牛腩200克，冬菇12克，八角2粒，花生油50克，姜、葱、精盐、味精、白糖、芝麻油、湿芡粉、胡椒粉、酱油、清汤各适量。</p><p>【功效】温阳散寒，理气止痛。</p><p>【用法】佐餐食用。</p><p>【制作】鲜牛腩200克，冬菇12克，八角2粒，花生油50克，姜、葱、精盐、味精、白糖、芝麻油、湿芡粉、胡椒粉、酱油、清汤各适量。</p><p>[制作]将牛腩切块，冬菇切片，八角洗净，姜切片，葱切段；将锅内放入花生油烧热，放入姜片、八角、冬菇、牛腩煸炒至水干，掺入清汤，调入精盐、味精、白糖、胡椒粉、酱油，用文火焖酥，汁浓时加入葱段，勾芡，淋入芝麻油即可。</p><p>茶姜散</p><p>【配方】红茶1.5克，荔枝干肉25克。</p><p>【制作】冲入沸水300毫升，浸泡5分钟即成，代茶饮。<br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:90px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>注意保暖，春夏养阳</p><p>日光浴。阳虚质在春夏季节尤其要注意培补阳气，避免长时间待在空调房里，做到“无厌于日”。晒太阳每次不少于15～20分钟，以上午8～10时、下午4～7时为宜，晒太阳时避免完全暴露于阳光下，可在树荫下、湖边等进行。</p><p>盐水足浴。临睡前，在洗足水中加盐一匙，洗净后，用手擦涌泉穴（在足底部，卷足时足前部凹陷处），左右各擦几十至几百次。肾经从涌泉起始，盐能引经通肾，此法可助阳散寒。</p></td></tr><tr style=\\\"height:72px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>阳虚质者耐春夏不耐秋冬，秋冬季节要适当暖衣温食以养护阳气，尤其要注意腰部和下肢保暖。</p><p>夏季暑热多汗，也易导致阳气外泄，使阳气虚于内。建议尽量避免强力劳作和大汗，也不可恣意贪凉饮冷。</p><p>多在阳光充足的情况下适当进行户外活动，不可在阴暗潮湿寒冷的环境下长期工作和生活。</p><p>节制房事、节制手淫及意淫等习惯尤为重要。</p></td></tr><tr style=\\\"height:198px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“五禽戏”中的虎戏，以益肾阳强腰骨。</p><p>起式</p><p>脚后跟靠拢成立正姿势，两臂自然下垂，两眼平视前方。</p><p>左式&nbsp;</p><p>两腿屈膝下蹲，重心移至右腿，左脚虚步，脚掌点地、靠于右脚内踝处，同时两掌握拳提至腰两侧，拳心向上，眼看左前方。</p><p>左脚向左前方斜进一步，右脚随之跟进半步，重心坐于右腿，左脚掌虚步点地，同时两拳沿胸部上抬，拳心向后，抬至口前两拳相对翻转变掌向前按出，高与胸齐，掌心向前，两掌虎口相对，眼看左手。</p><p>右式</p><p>左脚向前迈出半步，右脚随之跟至左脚内踝处，重心坐于左腿，右脚掌虚步点地，两腿屈膝，同时两掌变拳撤至腰两侧，拳心向上，眼看右前方。</p><p>右脚向右前方斜进一步，左脚随之跟进半步，重心坐于左腿，右脚掌虚步点地，同时两拳沿胸部上抬，拳心向后，抬至口前两拳相对翻转变掌向前按出，高与胸齐，掌心向前，两掌虎口相对，眼看右手。</p><p>如此反复左右虎扑，次数不限。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可根据自身情况及喜好选择功法。每周可练习2～3次，每次一遍。</p></td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>夏天不宜做剧烈运动。</p><p>冬天避免在大风、大寒、大雾、大雪及空气污染的环境中锻炼。&lt;/p&gt;</p></td></tr><tr style=\\\"height:162px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:脾俞</p><p>位置：在背部，当第十一胸椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp;</p><p>功能：健脾利湿，益气和中。&nbsp;</p><p>主治：背痛、腹胀、腹泻、呕吐、痢疾、便血等脾胃肠腑病证</p><p>方法：艾灸、按揉、穴位敷贴</p><p>&nbsp; &nbsp; 名称:气海</p><p>位置：位于体前正中线，脐下1寸半。</p><p>经脉：任脉</p><p>功能：生发阳气</p><p>主治：虚脱、形体赢瘦、脏气衰惫、乏力等气虚病证；水谷不化、绕脐疼痛、腹泻、痢疾、便秘等肠腑病证；小便不利、遗尿；遗精、阳痿、疝气。</p><p>方法：按摩、艾灸、穴位敷贴</p><p>&nbsp; &nbsp; 名称:肾俞</p><p>位置：在腰部，当第二腰椎棘突下，旁开1.5寸</p><p>经脉：足太阳膀胱经&nbsp;</p><p>功能：滋阴壮阳，补肾益气，利水消肿。</p><p>主治：腰痛、肾脏病、高血压、低血压、耳鸣、精力减退等</p><p>方法：艾灸、按摩、穴位敷贴</p></td></tr></tbody></table><p><br/></p><table width=\\\"813\\\" style=\\\"width: 100%;\\\"><colgroup><col width=\\\"67\\\" span=\\\"2\\\" style=\\\";width:67px\\\"/><col width=\\\"680\\\" style=\\\";width:680px\\\"/></colgroup><tbody><tr style=\\\"height:18px\\\" class=\\\"firstRow\\\"><td colspan=\\\"2\\\" width=\\\"133\\\" style=\\\"\\\">易患病</td><td width=\\\"680\\\" style=\\\"\\\">&nbsp;您有易患<strong>复发性口疮、慢性咽炎、习惯性便秘、失眠</strong>等病的倾向。</td></tr><tr style=\\\"height:18px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">原则</td><td width=\\\"680\\\" style=\\\"\\\"><strong>滋养人体肝肾之阴，达到养阴液、降虚火的作用。</strong> &nbsp; &nbsp; &nbsp; &nbsp;</td></tr><tr style=\\\"height:18px\\\"><td rowspan=\\\"3\\\" style=\\\"\\\">食补调养</td><td>宜选食物</td><td>谷物类：黑芝麻 黑大豆 绿豆 小麦 肉食类：螃蟹 鸭肉 虾肉 甲鱼 海参 蔬菜类：百合 银耳 黄瓜 果品类：甘蔗 梨 西瓜</td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\">少食温燥、辛辣、香浓的食物，如羊肉、狗肉、韭菜、茴香、辣椒、葵花籽、酒、咖啡、浓茶等性温燥烈之品，也不宜多食祛湿类食物，如冬瓜、木瓜、扁豆、薏苡仁、鲫鱼等。</td></tr><tr style=\\\"height:18px\\\"><td style=\\\"\\\">精选食谱</td><td><br/></td></tr><tr style=\\\"height:108px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">起居调理</td><td>调理方法</td><td width=\\\"680\\\" style=\\\"\\\"><p>保证充足的睡眠，保水保湿。</p><p>睡子午觉。睡眠质量最高的时间应该是晚上11点到凌晨1点（子时）和中午11点到1点（午时），中医称为“子午觉”。古人认为，这个时间是阴阳盛衰转化的时候，人体应该入静，以适应自然界的变化，尤其是子时入静更为重要。睡子午觉有利于养阴。</p><p>吞津练精养生法。每天早晨起来，微微闭上嘴唇，将舌尖顶住上颚，感到口腔里的唾液逐渐分泌出来，当唾液增加到一定量时，一边心里想着“滋补津液”，一边将口中津液缓缓吞下，反复3～5次，长期坚持，可以起到滋阴养液的作用。</p></td></tr><tr style=\\\"height:54px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>工作紧张、熬夜、剧烈运动、高温酷暑的工作生活环境等能加重阴虚倾向，应尽量避免。</p><p>房事养生以节欲保精为要。房事过度会导致阴精耗伤，因此，阴虚质者尤当节制房事，欲不可早，欲不可纵。戒除手淫意淫，避免色情刺激。</p></td></tr><tr style=\\\"height:360px\\\"><td rowspan=\\\"2\\\" style=\\\"\\\">运动调理</td><td>适宜项目</td><td width=\\\"680\\\" style=\\\"\\\"><p><strong>项目：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>可练“六字诀”中的“吹”字功，常练可以固肾气，壮筋骨。</p><p>发音: 吹（chuī）。&nbsp; &nbsp;</p><p>口型: 撮口，两嘴角向后咧，舌尖微向上翘。&nbsp;&nbsp;</p><p>动作：</p><p>预备式</p><p>两脚平行站立，约与肩同宽，两膝微屈；头正颈直，下颌微收，竖脊含胸；两臂自然下垂，周身中正；唇齿合拢，舌尖放平，轻贴上颚；目视前下方。</p><p>起势</p><p>动作一：曲肘，两掌十指相对，掌心向上，缓缓上托至胸前，约与两乳同高；目视前方；</p><p>动作二：两掌内翻，掌心向下，缓缓下按，至肚脐前；目视前下方；</p><p>动作三：微屈膝下蹲，身体后坐；同时两掌内旋，缓缓向前拨出，至两臂成圆；</p><p>动作四：两掌外旋内翻，掌心向内。起身，两缓缓收拢至肚脐前，虎口交叉相握轻覆肚脐；静养片刻，自然呼吸；目视前下方。</p><p>吹（chuī）字诀</p><p>动作一：两掌前推，随后松腕伸掌，指尖向前，掌心向下。</p><p>动作二：两臂向左右分开成侧平举，掌心斜向后，指尖向外。</p><p>动作三：两臂内旋，两掌向后划弧至腰部，掌心轻贴腰眼，指尖斜向下；目视前下方。</p><p>动作四：微屈膝下蹲；同时两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。两掌从腰部下滑时，口吐“吹”字音。&lt;br &nbsp; /&gt;动作五：两膝缓缓伸直；同时，两掌缓缓收回，轻抚腹部，指尖斜向下，虎口相对；目视前下方。</p><p>动作六：两掌沿带脉向后摩运。</p><p>动作七：两掌至后腰部，掌心轻贴腰眼，指尖斜向下；目视前方。</p><p>动作八：微屈膝下蹲；同时，两掌向下沿腰骶、两大腿外侧下滑，后屈肘提臂环抱于腹前，掌心向内，指尖相对，约与脐平；目视前下方。</p><p>重复五至八动4遍。本式共吐“吹”字音6次。</p><p>动作要点</p><p>吹”字吐气法：“吹”字音为唇音。发声吐气时，舌体、嘴角后引，槽牙相对，两唇向两侧拉开收紧，气从喉出后，从舌两边绕舌下，经唇间缓缓呼出体外；两掌从腰部下滑、环抱于腹前时呼气，口吐“吹”字音；两掌向后收回、横摩至腰时以鼻吸气。</p><p><strong>运动频率及运动量：</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p><p>根据自身情况和喜好进行锻炼。一般一周3～5次，每次30分钟以上。</p><p><br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td></tr><tr style=\\\"height:36px\\\"><td style=\\\"\\\">注意事项</td><td width=\\\"680\\\" style=\\\"\\\"><p>不宜进行剧烈运动，避免大强度、大运动量的锻炼形式，避免在炎热的夏天或闷热的环境中运动，以免出汗过多，损伤阴液。</p><p>不宜去桑拿。</p></td></tr><tr style=\\\"height:162px\\\"><td colspan=\\\"2\\\" style=\\\"\\\">穴位保健</td><td width=\\\"680\\\" style=\\\"\\\"><p>名称:涌泉</p><p>位置：在足底部，卷足时足前部凹陷处，约当第2、3趾趾指缝纹头端与足跟连线的前1/3与后2/3交点上。 &nbsp;&nbsp;</p><p>经脉：足少阴肾经</p><p>功能：益肾填精。</p><p>主治：神经衰弱、精力减退、倦怠感、失眠、多眠症、高血压、晕眩、焦躁、糖尿病、过敏性鼻炎、更年期障碍、怕冷症、肾脏病、下肢瘫痪、头顶痛、咽喉痛、失音、舌干、癫痫、神经性头痛、三叉神经病、精神分裂症等。</p><p>方法：按摩、艾灸、穴位敷贴&nbsp;</p><p>名称:三阴交</p><p>位置：在小腿内侧，当足内踝尖上3寸，胫骨内侧缘后方。</p><p>经脉：足太阴脾经&nbsp; &nbsp;</p><p>功能：调补肝肾，行气活血，疏经通络。</p><p>主治：脾胃虚弱，消化不良，腹胀肠鸣，腹泻，遗精，阳痿，阴茎中痛，水肿，小便不利，遗尿，膝脚痹痛，脚气，失眠，湿疹，荨麻疹，神经性皮炎，高血压病等</p><p>方法：按摩、艾灸、穴位敷贴</p></td></tr></tbody></table><p><br/></p>",
                        "createdOnUTC": 1541669166948,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "cf7194ae3e814301a2d2ff328fe38822",
                        "modifier": "",
                        "type": "1",
                        "updatedOnUTC": 1541669166949,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p>立冬为冬季的第一个节气，此时草木凋零，万物活动趋向休止，宜养精蓄锐，为来春生机勃发作储备。<br/>对于人体而言，由于天气寒冷，需要进补更多的能量食物以抵御寒邪的侵袭。<br/>立冬后的起居要早睡晚起，保证充足睡眠，避免过度劳累，并注意背部保暖，有利于阳气潜藏。<br/>同时还要适度运动，如散步等。</p>",
                        "createdOnUTC": 1541669167658,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "604519f98e67404b94ee523f5b065ee0",
                        "modifier": "",
                        "type": "2",
                        "updatedOnUTC": 1541669167658,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: left;\\\"><span style=\\\"text-align: center;\\\"><br/></span></p><p style=\\\"text-align: right;\\\"><span style=\\\"text-align: center;\\\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;医生签名</span><br/></p>",
                        "createdOnUTC": 1541669169085,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "954738a43253431f866522ace3b4efb1",
                        "modifier": "",
                        "type": "3",
                        "updatedOnUTC": 1541669169085,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    },
                    {
                        "content": "<p>如您已患某种疾病，请您遵医嘱接受治疗和调护<br/>若已患糖尿病、高脂血症、痛风、肥胖等疾病，应遵照相应的膳食规。如:<br/>糖尿病少高糖类食物；<br/>高脂血症及肥胖应少食高胆固醇、高糖、高脂肪食物；<br/>痛风禁食海鲜类嘌呤含量较高的食物；<br/>根据体质的易患疾病，请您提高警惕，防患于未然，定期进行相关检查；若有其它疑问，欢迎致 “KY3H全国客服电话” （86）4008118899或访问www.eky3h.com进行咨询，为了便于您更有效地管理自己的健康状况，我们在KY3H健康网（www.eky3h.com）为您提供了更加丰富的健康管理工具及体质调理产品，欢迎您登陆。</p>",
                        "createdOnUTC": 1541669169679,
                        "creator": "",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isShared": "0",
                        "isUpload": "1",
                        "knowledgeCode": "1c2a480acd14457eb823cf562226bc11",
                        "modifier": "",
                        "type": "4",
                        "updatedOnUTC": 1541669169679,
                        "userCode": "user1541665638402b55b7449e88b4003b12cc489bb438f56"
                    }
                ]
            }
            
        }
        else if (fun == 'getcustomerbyuser') {
            data = {
                "customerInfoList": [
                    {
                        "birth": "1978-01-01",
                        "cCardType": "101",
                        "cId": "0",
                        "cName": "姓名",
                        "contactAddress": "22345",
                        "createdOnUTC": 1540378623020,
                        "creator": "",
                        "customerCode": "customer1540292134370",
                        "fixedTel": " ",
                        "haveGwreport": "0",
                        "haveReport": "0",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isExport": "0",
                        "isUpload": "0",
                        "mobileTel": "2345676543212345432",
                        "modifier": "",
                        "nation": "汉",
                        "sex": "0",
                        "uCardNum": "123456",
                        "updatedOnUTC": 1540378623020,
                        "userCode": "user1540290320735",

                    },
                    {
                        "birth": "1984-01-01",
                        "cCardType": "101",
                        "cId": "0",
                        "cName": "asdad",
                        "contactAddress": "asdasdasd",
                        "createdOnUTC": 1540295199271,
                        "creator": "",
                        "customerCode": "customer1540295199271",
                        "fixedTel": " ",
                        "haveGwreport": "1",
                        "haveReport": "0",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isExport": "0",
                        "isUpload": "0",
                        "mobileTel": "123123123",
                        "modifier": "",
                        "nation": "满",
                        "sex": "1",
                        "uCardNum": "adadadasdasd",
                        "updatedOnUTC": 1540295199271,
                        "userCode": "user1540290320735"
                    },
                    {
                        "birth": "1990-01-01",
                        "cCardType": "101",
                        "cId": "0",
                        "cName": "ddd",
                        "contactAddress": "adad",
                        "createdOnUTC": 1540295707499,
                        "creator": "",
                        "customerCode": "customer1540295707499",
                        "fixedTel": " ",
                        "haveGwreport": "1",
                        "haveReport": "0",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isExport": "0",
                        "isUpload": "0",
                        "mobileTel": "13000000000",
                        "modifier": "",
                        "nation": "汉",
                        "sex": "1",
                        "uCardNum": "123123123123",
                        "updatedOnUTC": 1540295707499,
                        "userCode": "user1540290320735"
                    },
                    {
                        "birth": "1976-01-01",
                        "cCardType": "101",
                        "cId": "0",
                        "cName": "测试",
                        "contactAddress": "ddddddd",
                        "createdOnUTC": 1540302418213,
                        "creator": "",
                        "customerCode": "customer1540302418213",
                        "fixedTel": " ",
                        "haveGwreport": "1",
                        "haveReport": "0",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isExport": "0",
                        "isUpload": "0",
                        "mobileTel": "18611441173",
                        "modifier": "",
                        "nation": "汉",
                        "sex": "1",
                        "uCardNum": "123123123123123",
                        "updatedOnUTC": 1540302418213,
                        "userCode": "user1540290320735"
                    },
                    {
                        "birth": "1979-01-01",
                        "cCardType": "101",
                        "cId": "0",
                        "cName": "ceshi2",
                        "contactAddress": "222",
                        "createdOnUTC": 1540302930787,
                        "creator": "",
                        "customerCode": "customer1540302930787",
                        "fixedTel": " ",
                        "haveGwreport": "0",
                        "haveReport": "0",
                        "isAudit": "0",
                        "isDelete": "0",
                        "isExport": "0",
                        "isUpload": "0",
                        "mobileTel": "18611441173",
                        "modifier": "",
                        "nation": "han",
                        "sex": "0",
                        "uCardNum": "22222",
                        "updatedOnUTC": 1540302930787,
                        "userCode": "user1540290320735"
                    }
                ]
            }
        }
        else if (fun == 'update') {
            //data = { "state": "0", "message": "当前最新版本号：1.2", "newestVersionNo": "1.2", "versionUrl": "20181008/downImg.html" }
            data = '{                "state": "0",                "message": "当前最新版本号：2.2",                "newestVersionNo": "2.2",                "versionUrl": "http://47.92.160.74/version/20181108/slice_6.apk"            }'
            window[success](data);
            return;
        }
        else if (fun == 'getorgdata') {
            data = { "state": "0", "message": "success", "orgData": [{ "orgId": 20, "orgName": "炎黄东方（北京）健康科技有限公司总公司", "parent": null }, { "orgId": 21, "orgName": "北京东直门医院国际部", "parent": 20 }, { "orgId": 22, "orgName": "北京国宗济世中医医院", "parent": 20 }, { "orgId": 23, "orgName": "北京弘医堂国际中医诊所", "parent": 20 }, { "orgId": 24, "orgName": "京朋汇名老中医堂", "parent": 20 }, { "orgId": 25, "orgName": "北京仁医堂中医门诊部（东中街）", "parent": 20 }, { "orgId": 26, "orgName": "北京仁医堂中医门诊部（雍和宫）", "parent": 20 }, { "orgId": 27, "orgName": "北京医圣堂中医医院", "parent": 20 }, { "orgId": 29, "orgName": "北京协和医院", "parent": 20 }, { "orgId": 30, "orgName": "中国人民解放军总医院（301医院）", "parent": 20 }, { "orgId": 31, "orgName": "首都医科大学附属北京同仁医院", "parent": 20 }, { "orgId": 32, "orgName": "中国医学科学院阜外心血管病医院", "parent": 20 }, { "orgId": 33, "orgName": "首都医科大学附属北京安贞医院", "parent": 20 }, { "orgId": 34, "orgName": "天坛医院", "parent": 20 }, { "orgId": 35, "orgName": "首都医科大学宣武医院", "parent": 20 }, { "orgId": 36, "orgName": "首都医科大学附属儿童医院", "parent": 20 }, { "orgId": 37, "orgName": "首都儿科研究所", "parent": 20 }, { "orgId": 38, "orgName": "北京妇产医院", "parent": 20 }, { "orgId": 39, "orgName": "北京大学人民医院", "parent": 20 }, { "orgId": 40, "orgName": "北京大学第一医院（北大医院）", "parent": 20 }, { "orgId": 41, "orgName": "北京大学第三医院（北医三院）", "parent": 20 }, { "orgId": 42, "orgName": "北京大学肿瘤医院", "parent": 20 }, { "orgId": 43, "orgName": "北京大学第六医院（北医六院）", "parent": 20 }, { "orgId": 44, "orgName": "中国医学科学院肿瘤医院", "parent": 20 }, { "orgId": 45, "orgName": "首都医科大学附属北京朝阳医院", "parent": 20 }, { "orgId": 46, "orgName": "友谊医院", "parent": 20 }, { "orgId": 47, "orgName": "中日友好医院", "parent": 20 }, { "orgId": 48, "orgName": "北京医院", "parent": 20 }, { "orgId": 49, "orgName": "中国人民解放军第三〇二医院", "parent": 20 }, { "orgId": 50, "orgName": "中国人民解放军第304医院", "parent": 20 }, { "orgId": 51, "orgName": "中国人民解放军第306医院", "parent": 20 }, { "orgId": 52, "orgName": "中国人民解放军第307医院", "parent": 20 }, { "orgId": 53, "orgName": "中国人民解放军第309医院", "parent": 20 }, { "orgId": 54, "orgName": "首都医科大学附属北京安定医院", "parent": 20 }, { "orgId": 55, "orgName": "中国中医科学院广安门医院", "parent": 20 }, { "orgId": 56, "orgName": "北京中医医院", "parent": 20 }, { "orgId": 57, "orgName": "北京中医药大学东直门医院", "parent": 20 }, { "orgId": 58, "orgName": "中国中医科学院西苑医院", "parent": 20 }, { "orgId": 59, "orgName": "北京积水潭医院", "parent": 20 }, { "orgId": 60, "orgName": "二龙路医院", "parent": 20 }, { "orgId": 61, "orgName": "首都医科大学附属北京口腔医院", "parent": 20 }, { "orgId": 62, "orgName": "中国医学科学院整形外科医院", "parent": 20 }, { "orgId": 63, "orgName": "中国人民解放军空军总医院", "parent": 20 }, { "orgId": 64, "orgName": "中国人民解放军海军总医院", "parent": 20 }, { "orgId": 65, "orgName": "武警总医院", "parent": 20 }, { "orgId": 66, "orgName": "中国人民解放军火箭军总医院", "parent": 20 }, { "orgId": 67, "orgName": "中国中医科学院眼科医院", "parent": 20 }, { "orgId": 68, "orgName": "北京军区总医院", "parent": 20 }] }
        }
        window[success](JSON.stringify(data));
        //Android.run(fun, JSON.stringify(params), success, error);
        //Android.run("activition", JSON.stringify({ code: "12sdada122" }), 'success', '$error');
    }, loadShow() {
        // Android.run('loadshow');
    },
    log(){

    },
    loadHide() {
        // Android.run('loadHide');
    }
}