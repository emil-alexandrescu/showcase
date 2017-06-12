'use strict';

module.exports = apiError;

/**
 * Removes server error when user updates input
 */
function apiError() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ngModel) {
            element.on('keydown', function() {
                return ngModel.$setValidity('api', true);
            });
        }
    };
}
