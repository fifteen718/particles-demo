// Vue CLI3 坑爹的地方 webpack配置需自建 vue.config.js
// 详见官方文档：https://cli.vuejs.org/zh/config/#vue-config-js
module.exports = {
    // 注意：baseUrl 从 Vue CLI 3.3 起已弃用，请使用 publicPath
    // vue-router 'history'模式下 请取绝对路径 
    // baseUrl: process.env.NODE_ENV === 'production' ? '/operation-preview/' : '/'
    // publicPath: process.env.NODE_ENV === 'production' ? '/operation-preview/' : '/'

    // vue-router 默认（'hash'）模式下 请取相对路径
    // baseUrl: process.env.NODE_ENV === 'production' ? './' : '/'
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
}
