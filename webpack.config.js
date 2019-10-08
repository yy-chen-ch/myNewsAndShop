const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
var htmlWebpackPlugin = require('html-webpack-plugin');

// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    entry: path.resolve(__dirname, './src/js/main.js'), // 项目入口文件
    output: { // 配置输出选项
        path: path.resolve(__dirname, './dist'), // 配置输出的路径
        filename: 'bundle.js' // 配置输出的文件名
    },
    plugins:[ // 添加plugins节点配置插件
        new htmlWebpackPlugin({
            template:path.resolve(__dirname, './src/index.html'),//模板路径
            filename:'index.html'//自动生成的HTML文件的名称
        }),
        new VueLoaderPlugin()
    ],
    module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
            { test: /\.(png|jpg|gif|ttf)$/, use: 'url-loader?limit=43960' },//处理css中的路径
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ] 
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.js'
        }
      }
}