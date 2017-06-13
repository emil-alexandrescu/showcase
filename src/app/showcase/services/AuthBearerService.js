'use strict';

module.exports = AuthBearerService;

/**
 * @ngInject
 */
function AuthBearerService(AuthService, $state, $location) {
    var AuthBearerService = {
        validate: function() {
            AuthService.isLoggedInAsync().then(function() {
                // do nothing
            }).catch(function() {
                $location.path('/login');
            })
        }
    }
    return AuthBearerService;
}
