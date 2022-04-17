/* eslint-disable quote-props */
const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitespace: true,
    extractCSS: !isDev, // 将 vue 中的 css 样式也配合 extract-text-webpack-plugin 插件整合到一起
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]', // css 类名命名规则
      camelCase: true // 命名方式，驼峰式命名
    },
    loaders: {
      // 自定义模块
      'docs': docsLoader
    },
    // 在 loader 之前再使用另外的loader先去解析代码
    preLoader: {},
    postLoader: {}
  }
}
