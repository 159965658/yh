//directive 自定义指令的js 
// 注册一个全局自定义指令 v-imgload  
// import course from DEFAULT_COURSE;
var imgload = {
    bind: (el, binding) => {
        el.onerror = (t) => {
            // console.log(t, binding);
            t.target.src = DEFAULT_IMG['DEFAULT_' + binding.value];
        }
        el.onload = (event) => {
            if (event.target.complete == true) {
                event.target.classList.remove("default-image");
                event.target.classList.add('show-image');

                // var imgParentNode = event.target.parentNode;
                // if (imgParentNode.classList.contains('show-img') == true) {
                //     imgParentNode.style.background = "#000";
                // }
            }
        }
    },
    // 当绑定元素插入到 DOM 中。
    inserted: function (el, binding) { //拿到dom动态算出高度
        console.log(el);
        // console.log(el, binding);
        // let img = DEFAULT_COURSE;
        // console.log(img);
        // el.src = DEFAULT_ + binding.value
        // if (!el.src) { //防止src = null
        //     el.src = '11';
        //     //  event.target.src='12';
        // }

    },
    unbind: (el) => {

    }
}

export default imgload 
