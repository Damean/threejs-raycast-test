const { merge } = require('webpack-merge')
const commonConfiguration = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(
    commonConfiguration,
    {
        mode: 'production',
        devtool: 'source-map',
        plugins:
        [
            new CleanWebpackPlugin()
        ],
        optimization: {
          minimizer: [
            `...`,
            new CssMinimizerPlugin(),
          ]
        },
    }
)
