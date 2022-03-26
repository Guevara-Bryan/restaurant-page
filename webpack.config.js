const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/pages/index.js',
    },

    devtool: 'inline-source-map',

    plugins:[
        new HtmlWebpackPlugin({
            title: 'Giorgio\'s Fine Dining',
        }),
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};