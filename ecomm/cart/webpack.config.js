const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { plugins } = require('../products/webpack.config');

module.exports = {
    mode: 'development',
    devServer: {
        port: 9002
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
            shared: ['faker'],
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};