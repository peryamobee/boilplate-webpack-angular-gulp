module.exports = function () {
    /* Styles */
    require('./vendor.scss');

    /* JS */
    global.$ = global.jQuery = require('jquery');
    // $ for Lumx, jQuery for velocity

    require('angular');
    global.moment = require('moment');
};