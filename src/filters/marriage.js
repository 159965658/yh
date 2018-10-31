import { marriage } from "../../static/dict/marriage.js";
export default (value) => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    //  if (value) {
    console.log(value);
    const model = marriage.find(p => p.id == value);
    console.log(model);
    if (model) {
        return model.name;
    }
    return '其他';
}