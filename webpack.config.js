/**
 * Created by pery on 30/01/2016.
 */
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var exportRunTimeVariable = new webpack.DefinePlugin({
    MODE: {
        production: process.env.NODE_ENV === 'production'
    }
});

var extractSCSS =  new ExtractTextPlugin("[name].css");

module.exports = {
    watch: true,
    devtool: 'source-map',
    resolve: {
        root: __dirname + '/src'
    },
    entry:{
        TimerApp:'./src/core/bootstrap.js'
    },
    output:{
        path: path.join(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        loaders:[
            {test:/\.css$/,
                loader:'style!css'},

            {test: /\.scss$/,
                loader: extractSCSS.extract('style-loader?sourceMap','css-loader!sass-loader')},

            {test: /\.js$/,
                loader: 'ng-annotate',
                exclude: /node_modules|bower_components/},

            {test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
                loader : 'file-loader?name=res/[name].[ext]?[hash]'
            },

            {test: /\.html/,
                loader: 'raw'},

            {test: /\.json/,
                loader: 'json'}

        ]
    },
    plugins: [
        extractSCSS,
        exportRunTimeVariable
    ]
};
