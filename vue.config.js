const webpack = require('webpack')
module.exports = { // 只能写vue封装的配置
  // runtimeCompiler: true,
  lintOnSave: false, // 关闭EsLint的规则
  devServer: {
    proxy: {
      '/api': {
        target: 'http://172.17.128.144:31200',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      },
    }
  },
  css: {
    loaderOptions: {
      less: {
        // 自定义主题样式
        modifyVars: {
          'primary-color': '#41B883',
          'link-color': '#41B883',
          'border-radius-base': '2px'
        },
        // 解决问题主要需要打开这个
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })

    ]
  }
}