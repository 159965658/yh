

export default {
    run(fun, params, success, error = 'window.$error') {
        console.log("log from js");

        console.log(fun, params, success, error);
        window[success]();
        //Android.run(fun, JSON.stringify(params), success, error);
        //Android.run("activition", JSON.stringify({ code: "12sdada122" }), 'success', '$error');
    },
}