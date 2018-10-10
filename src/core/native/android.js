

export default {
    run(fun, params, success, error = window.$error) {
        console.log("log from js");

        console.log(fun, params, success, error)
        Android.run(fun, JSON.stringify(params), success, error);
    },
    success(data, callBack) {
        console.log("成功")
    },
    error(msg, callBack) {
        console.log("失败");
    }
}