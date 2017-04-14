const {resolve} = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const devFlagPlugin = new webpack.DefinePlugin({
    'process.env': {
        NODE_ENV: JSON.stringify('production')
    }
});

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
        index: './index.html',
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
                test: /\.html$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                }
            },
            {
                test: /\.js?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
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
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                include: resolve(__dirname, "src/fonts/"),
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: "/fonts/[name].[ext]"
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                include: [
                    resolve(__dirname, "src/img/"),
                    resolve(__dirname, "src/svg/")
                ],
                loader: 'file-loader',
                options: {
                    name: "/img/[name].[ext]"
                }
            }
        ]
    },
    plugins: [
        extractSass,
        uglifyJS,
        devFlagPlugin
    ]
};