
//导入市
import { province } from "../../static/dict/province.js";
export default (value) => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    //  if (value) {
    console.log(value);
    const model = province.find(p => p.id == value);
    console.log(model);
    if (model) {
        return model.name;
    }
    return '其他';
}