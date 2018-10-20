export default (value) => {
    //  if (value) {
    let name = '';
    console.log(value);
    if (value == '101') {
        name = '身份证'
    }
    else if (value == "105") {
        name = "其他"
    }
    // switch (value) {
    //     case "101":
    //         name = '身份证'
    //     case "105":
    //         name = '其他'

    // }
    return name;
}