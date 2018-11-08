export default (value) => { //data 为空 type = 1 type 0 时间戳 1时间对象 2时间字符串 
    if (value) {
        // console.log(value);
        const date = new Date(value),
            m = date.getMonth();
        // 4 / 4 = 1
        console.log(m);
        if (m == 11 || m == 0 || m == 1) {
            return '冬季'
        }
        if (m == 2 || m == 3 || m == 4) {
            return '春季'
        }
        if (m == 5 || m == 6 || m == 7) {
            return '夏季'
        }
        if (m == 8 || m == 9 || m == 10) {
            return '秋季'
        }
        return '其他';
    }
    return '其他';
}