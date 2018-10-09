

export default {
    run($vm) {
        console.log("log from js");
        let json = {
            // success: function () {
            //     alert('成功')

            // },
            // error: function () {
            //     alert('失败')
            // }
        }
        console.log(JSON.stringify(json))
        Android.run("log", json);
    }
}