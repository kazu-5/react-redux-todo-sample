const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/App.tsx',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
		publicPath: '/public/',
    },
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ],
    },
};