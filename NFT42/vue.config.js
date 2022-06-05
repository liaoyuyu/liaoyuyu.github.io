const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: "./",
    devServer: {
        proxy: {
            '/front': {
                //请求的目标服务器
                target: 'https://api.42verse.shop/api',
                secure:true,
                //路径过滤 正则替换空
                pathRewrite: { 
                    '^/front': '/front' 
                },
                //用于支持webscoket
                ws: true,
                //服务器骗不骗另一个服务器自己从哪里来
                changeOrigin: true
            }
        }
    },
    chainWebpack: config => {
        config.plugin('provide').use(webpack.ProvidePlugin, [{
          $: 'jquery',
          jquery: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        }])
    }
})
