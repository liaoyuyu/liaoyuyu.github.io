import $ from "jquery"

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * @param url  //api
 * @param type  // POST or GET
 * @param params // 参数
 * @param dataType 
 */
export function ajax(options) {
    return new Promise((resolve, reject) => {
        if (localStorage.__nft42InfoToken__) {
            $.ajax({
                type: options.type?options.type:"GET",  //提交方式  
                url: "https://api.42verse.shop/api" + options.url,//路径  
                data: options.params,
                dataType: options.dataType?options.dataType:"jsonp",
                contentType: "application/json",
                success: function (res) {//返回数据根据结果进行相应的处理  
                    // console.log(res)
                    resolve(res.data);
                },
                error:function(err){
                    console.log(err)
                    console.warn("网络错误，请稍后重试！")
                }
            });
        } else {
            console.error("token！token！token！")
        }



    });
}
