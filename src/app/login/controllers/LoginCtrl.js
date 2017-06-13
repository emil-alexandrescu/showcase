'use strict';

module.exports = LoginCtrl;

/**
 * @ngInject
 */
function LoginCtrl(AuthService, $location) {
    var vm = this;

    vm.error = '';
    vm.user = {
        username: '',
        password: ''
    };

    vm.login = function(form) {
        vm.submitted = true;
        vm.error = '';
        if (form.$valid) {
            AuthService.login({
                username: vm.user.username,
                password: vm.user.password
            })
            .then(function() {
                // login successful!
                $location.path('/');
            })
            .catch(function(err) {
                vm.error = err.message;
            });
        }
    };
}
