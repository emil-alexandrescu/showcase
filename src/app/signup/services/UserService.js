'use strict';

module.exports = UserService;

/**
 * @ngInject
 */
function UserService() {
    var UserService = {
        create: create
    };

    return UserService;

    //////////

    function create() {
        // stubbing API for creating account. Always success!
        return Promise.resolve();
    }
}
