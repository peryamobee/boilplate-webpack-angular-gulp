/**
 * Created by pery on 30/01/2016.
 */
//document.write( require('./content.js') );
require('./index.scss');
module.exports = angular.module('app', [
 'lumx'
])
    .run(function () {
        alert('angular alive');
    });