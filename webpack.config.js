const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        tab_controller: "./src/pages/tab_controller.js",
        home: "./src/pages/home.js",
        menu: "./src/pages/menu.js",
        contact: "./src/pages/contact.js",
    },

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