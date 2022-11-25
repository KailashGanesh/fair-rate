const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const loader = require('sass-loader')
const CopyPlugin = require("copy-webpack-plugin")
const ImageminWebpWebpackPlugin= require("imagemin-webp-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode:'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        // filename: '[name][contenthash].js',
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool:'source-map',
    devServer:{
        // static: {directory:path.resolve(__dirname,'dist')},
        static: {directory:path.resolve(__dirname,'')},
        port:3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules:[
            {
                test:/\.scss$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader'],
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },

        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'FairRate',
            // filename:'index.html',
            filename:path.join(__dirname, "index.html"),
            template: 'src/template.html',
            // scriptLoading: 'blocking',
            favicon:'src/favicon.png',
            publicPath: 'dist/'
        }),
        new CopyPlugin({patterns:[
            {from: './src/assets/sprite.svg', to:''},
            {from: './src/assets/img', to:'./img'},
            // {from:'./dist/index.html', to:'../index.html'},
        ]}),
        new MiniCssExtractPlugin(),
        new ImageminWebpWebpackPlugin({
            config: [{
              test: /\.(jpe?g|png)/,
              options: {
                quality:  75
              }
            }],
            overrideExtension: true,
            detailedLogs: false,
            silent: false,
            strict: true
          })
    ]
}