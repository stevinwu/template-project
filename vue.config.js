const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  publicPath: '/', //默认假设你的应用部署再一个域名的根路径上， 如果应用部署在一个子路径https://www.my-app.com/my-app/， 则设置为 /my-app/
  lintOnSave: process.env.NODE_ENV !== 'production',
  chainWebpack: config => {
    config.resolve.alias
    .set('@', resolve('src'));
  },
  devServer: {
    open: true,
    disableHostCheck: true,
    host: "local.opd.kugou.net",
    proxy: {
      '/user': {
        target: 'http://dev.opd.kugou.net',
        changeOrigin: true,
      }
    }
  }
}