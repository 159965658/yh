

export default {
    run(fun, params, success, error = 'window.$error', load = true) {
        console.log("log from js");
        console.log(fun, params, success, error)
        try {
            if (load && (fun == 'activition' || fun == 'update' || fun == 'getdmz')) {
                Android.run('loadshow', '', '', '');
            }
            Android.run(fun, JSON.stringify(params), success, error);
        } catch (error) {
            alert('android' + error);
        }
    },
    loadShow() {
        Android.run('loadshow', '', '', '');
    },
    loadHide() {
        // Android.run('loadHide');
        try { Android.run('loadhide', '', '', ''); } catch (error) {
            alert('android' + error);
        }

    }
}