'use strict';

require('angular')
    .module('bookbottles.showcase', [
        /* 3rd Party */
        require('angular-ui-router'),

        /* Custom */
        require('../signup'),
        require('../login')
    ])
    .directive('apiError', require('./components/api-error/api-error'))
    .directive('githubItem', require('./components/github-item/github-item'))
    .directive('passwordConfirmation', require('./components/password-confirmation/password-confirmation'))
    .factory('GithubService', require('./services/GithubService'))
    .factory('AuthBearerService', require('./services/AuthBearerService'))
    .controller('DashboardCtrl', require('./controllers/DashboardCtrl'))
    .config(require('./config'))
    .config(require('./route'))
    .run(['$rootScope', 'AuthService', 'AuthBearerService', function($rootScope, AuthService, AuthBearerService) {
        AuthBearerService.validate();
        $rootScope.$on('$stateChangeStart', function (event, next) {
            if (next.authenticate) {
                AuthBearerService.validate();
            }
        });
    }]);
