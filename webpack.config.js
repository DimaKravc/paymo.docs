const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/js/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/js/',
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};