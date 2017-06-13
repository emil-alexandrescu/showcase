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
    .directive('passwordConfirmation', require('./components/password-confirmation/password-confirmation'))
    .config(require('./config'))
    .config(require('./route'));
