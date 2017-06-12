'use strict';

module.exports = SignUpCtrl;

/**
 * @ngInject
 */
function SignUpCtrl(UserService, $location) {
    var vm = this;

    vm.errors = {};
    vm.user = {
        username: '',
        password: '',
        passwordConfirmation: ''
    };

    vm.signUp = function(form) {
        vm.submitted = true;

        if (form.$valid) {
            UserService.create({
                username: vm.user.username,
                password: vm.user.password
            })
            .then(function() {
                // account is created. Let's redirect to home.
                $location.path('/');
            })
            .catch(function(err) {
                err = err.data;
                vm.errors = {};

                // Update validity of form fields that match the api errors
                angular.forEach(err.errors, function(error, field) {
                    form[field].$setValidity('api', false);
                    vm.errors[field] = error.message;
                });
            });
        }
    };
}
