const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var basePath = __dirname;

module.exports = {
    context: __dirname,
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    entry: {
        app: './src/index.tsx',
        appStyles: './src/css/scryfall.css',
        vendor: [
          'react',
          'react-dom',
          'react-router',
          'toastr',
          'lc-form-validation',
          'redux',
          'react-redux',
          'redux-thunk',
        ],
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            filename: 'index.html', //Name of file in ./build/
            template: 'index.html', //Name of template in ./src
            hash: true,
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(basePath, 'build')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'awesome-typescript-loader',
          options: {
            useBabel: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
          ],
        },
        // Loading glyphicons => https://github.com/gowravshekar/bootstrap-webpack
        // Using here url-loader and file-loader
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'
        },
        {
          test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
        },
      ],
    },
};