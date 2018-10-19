export default (value) => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    //  if (value) {
    switch (value) {
        case 101:
            return '身份证'
            break;
        case 105:
            return '其他'
        default:
            return '未知'
            break;
    }
}