const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        './index.jsx'
    ],
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    }
};