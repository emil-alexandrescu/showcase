'use strict';

module.exports = route;

/**
 * @ngInject
 */
function route($stateProvider) {
    // Configure states here
    $stateProvider
        .state('login', {
            url: '/login',
            template: require('./templates/login.tpl.jade'),
            controller: 'LoginCtrl as vm'
        });
}
