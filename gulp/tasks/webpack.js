/**
 * Created by pery on 29/01/2016.
 */
var gulp = require('gulp');
var  webpackConfig = {
    /*entry: {
     //app: 'src/app.js',
     //test: 'test/test.js',
     },*/
    output: {
        //filename: '[name].js',
        filename: 'Timer-App.js',
    },
    devtool: 'source-map',
    module: {
        loaders: [{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    },

};
var ports = {
    server:3000
};

gulp.task('webpack', function() {
    var webpack = require('webpack-stream');
    return gulp.src('src/index.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('build/'));
});

gulp.task('webpack-web-server', function (done) {
    //var webpackDevConfig = Object.create(webpackConfig);
    //webpackDevConfig.devtool = 'eval';
    //webpackDevConfig.debug = true;
    //webpackDevCompiler = webpack(webpackDevConfig);
    //
    //myConfig.entry  = {
    //    app: [
    //        'webpack-dev-server/client?http://localhost:3000'
    //        ,"src/index.js"
    //    ]
    //};
    //var compiler = require("webpack")(webpackDevConfig);
    //var WebpackDevServer = require("webpack-dev-server");
    //var server = new WebpackDevServer(compiler,{
    //    contentBase:'build/',
    //    quiet:false,
    //    noInfo:false,
    //    lazy:false,
    //    watchDelay:300,
    //    //historyApiFallback: true,
    //    stats:{
    //        colors:true
    //    }
    //});
    //server.listen(ports.server,'0.0.0.0', function (err) {
    //    if (err) {
    //        throw new gutil.PluginError('webpack-dev-server', err);
    //    }
    //
    //    gutil.log('[webpack-dev-server]', 'http://localhost:' + ports.server);
    //    done();
    //})
});