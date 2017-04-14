const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "/css/[name].css"
});

const uglifyJS = new UglifyJSPlugin({
    debug: true,
    minimize: true,
    sourceMap: true
});

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        bundle: './index.js',
        styles: './sass/index.scss'
    },
    output: {
        filename: 'js/[name].js',
        path: resolve(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader"
                    }]
                })
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: "/fonts/[name].[ext]"
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: "/img/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        extractSass,
        uglifyJS
    ]
};