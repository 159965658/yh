

export default {
    run($vm) {
        console.log("log from js");
        let json = {
            vm: $vm,
            success: function (vm) {
                alert('成功')
                console.log(vm);
            },
            error: function () {
                alert('失败')
            }
        }
        console.log(JSON.stringify(json))
        json.success($vm);
    }
}