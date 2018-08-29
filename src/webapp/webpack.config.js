var webpack = require('webpack');
var path = require('path');
//
//var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var BUILD_DIR = path.resolve(__dirname, 'site/js/compiled');
var APP_DIR = path.resolve(__dirname, 'jsx-app');
//
//var config = {
//  entry: APP_DIR + '/index.jsx',
//  output: {
//    path: BUILD_DIR,
//    filename: 'bundle.js'
//  },
//  module : {
//      {
//        test : /\.jsx?/,
//        include : APP_DIR,
//        loader : 'babel'
//      }
//    ]
//  }
//};
//
//module.exports = config;
//
//var path = require('path');
var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
//        path: path.resolve(__dirname, 'js/compiled'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                query:
                        {
                            presets: ['es2015', 'react']
                        }
            }]
    },

};

module.exports = config;