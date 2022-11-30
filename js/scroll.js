window.addEventListener("scroll", percent)
// 页面百分比
function percent() {
    // console.log("函数执行")
    if(document.querySelector("#post")){
        let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比

        up = document.querySelector("#post-percent"); // 获取按钮
    up.childNodes[0].childNodes[0].innerHTML = result + "%";
    }
    
}