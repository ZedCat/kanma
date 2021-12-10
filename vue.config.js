const path = require('node:path')
module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${path.join(
            __dirname,
            './src/theme/modify.less' // 这个import 的路径必须是绝对路径
          )}";`
        }
      }
    }
  }
}
