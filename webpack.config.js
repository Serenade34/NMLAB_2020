const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_compontents)/,
            use: [
                'babel-loader'
            ]
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ],
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader',
            ],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
               'file-loader',
            ],
        }
    ]

  },
  devServer: {
    //指定開啟port為9000
    port: 9000,  
  }
};