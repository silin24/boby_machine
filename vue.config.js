const path = require('path')
const px2rem = require('postcss-px2rem') // postcss的一个插件
const postcss = px2rem({
  remUnit: 39   //设计稿等分之后的值，等分的比例同页面rem的比例是一致的
})
module.exports = { // 只能写vue封装的配置
  // runtimeCompiler: true,
  lintOnSave: false, // 关闭EsLint的规则
  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },

  configureWebpack: { // 内部写webpack原生配置
    resolve: {
      extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
      alias: { // 路径别名(简写方式)
        // 'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配   带vue编译器
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
      }
    }
  },
  devServer: {
    // proxy: {
      // '/api': 'http://localhost:4000'   // http://localhost:4000/api/search/users
      // '/api': {
      //   target: 'http://localhost:4000', // 转发的目标地址
      //   pathRewrite: {
      //     '^/api' : ''
      //   },
      // },
    // },
    disableHostCheck : true,
  }
}