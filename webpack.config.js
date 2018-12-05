var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:__dirname + '/index.html',
    filename:'index.html',
    inject:'body'
})

module.exports ={
    mode:'development',

   entry: [__dirname + '/index.js'],
   watch:true,
   module:{
       rules:[
           {
               test:/\.js$/,
               exclude:/node_modules/,
               use:{
                loader:'babel-loader'
               }
           },
           {
               test:/\.css$/,
               use:[
                   {
                       loader:'style-loader'
                   },
                   {
                       loader:'css-loader'
                   }

                ]
           },
           {
            test: require.resolve('jquery'),
            use: [{
                loader: 'expose-loader',
                options: 'jQuery'
            },{
                loader: 'expose-loader',
                options: '$'
            }]
        }
           

       ]
   },
   output:{
       filename:'bundle.js',
       path:__dirname + '/build',
       publicPath: '/'
   },
   plugins:[
       HTMLWebpackPluginConfig
    ],
  devServer: {
    historyApiFallback: true,
    publicPath: '/'
  }
};
