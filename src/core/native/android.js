

export default {
    run(fun, params, success, error = 'window.$error', load = true) {
        console.log("log from js");
        console.log(fun, params, success, error)
        try {
            if (load) {
                //Android.run('loadshow', '', '', '');
            }
            Android.run(fun, JSON.stringify(params), success, error);
        } catch (error) {
            alert('android' + error);
        }
    },
    loadShow() {
        Android.run('loadshow');
    },
    loadHide() {
        // Android.run('loadHide');
    }
}