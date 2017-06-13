'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('dashboard', {
            url: '/',
            controller: 'DashboardCtrl as vm',
            template: require('./templates/home.tpl.jade'),
            authenticate: true
        });
}
