'use strict';

module.exports = passwordConfirmation;

/**
 * Checks if password and password_confirmation matches
 */
function passwordConfirmation() {
    return {
        require: 'ngModel',
        link: function (scope, elem, attrs, ctrl) {
            elem.on('keyup', function () {
                scope.$apply(function () {
                    ctrl.$setValidity('pwmatch', elem.val() === document.getElementById(attrs.passwordConfirmation).value);
                });
            });
        }
    };
}
