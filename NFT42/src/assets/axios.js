import axios from 'axios'; // 引入axios



axios.defaults.timeout = 30000;

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 接口地址
// axios.defaults.baseURL = "https://api.42verse.shop/api"
axios.defaults.baseURL = ""

// 请求拦截器
axios.interceptors.request.use(
    config => {
        //判断vuex里面是否有token 有就携带
        // const token = store.state.token;        
        // token && (config.headers.Authorization = token);  
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

// 响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        return Promise.reject(error.response);
    }
)



/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 * @param url  //api
 * @param params // 参数
 */
export function post(options) {
    return new Promise((resolve, reject) => {
        if (localStorage.__nft42InfoToken__) {
            // 设置headr token
            axios.defaults.headers['Authori-zation'] = localStorage.__nft42InfoToken__;
            axios.post(options.url, options.params).then(res => {
                // if (res.data.code == 200) {
                //     resolve(res.data.data);
                // } else {
                //     // 提示错误
                //     console.warn(res.data.message)
                // }
                resolve(res.data);
            }).catch(err => {
                console.log(err)
                console.warn("网络错误，请稍后重试！")
            })
        } else {
            console.error("token！token！token！")
        }



    });
}
