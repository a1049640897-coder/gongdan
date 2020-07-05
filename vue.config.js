//配置文件夹别名
module.exports = {
  lintOnSave:false,
  configureWebpack: {

    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'store': '@/store',
        'views': '@/views',
        'common':'@/common',
        'styles':'@/styles'
      }
    }
  },
}