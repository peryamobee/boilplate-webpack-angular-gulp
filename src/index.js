require('./index.scss');

module.exports = angular.module('app', [
 'lumx'
])
.run(function () {
    alert('angular alive');
});