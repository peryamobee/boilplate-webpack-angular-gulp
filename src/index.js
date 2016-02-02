require('./index.scss');

module.exports = angular.module('app', [
        'ui.router'
        ,'ui.router.stateHelper'
    ])
    .config(function (stateHelperProvider, $urlRouterProvider) {
        var Timer = require('./pages/timer/timer.js').stateConfig;
        stateHelperProvider.state({
            name: "root",
            url: "^",
            abstract: true,
            template: '<ui-view></ui-view>',
            children: [
                Timer
            ]
        }, "IgnoreRoot");
        $urlRouterProvider.otherwise(Timer.url);
    })
    .run(function () {
        alert('angular alive');
    });