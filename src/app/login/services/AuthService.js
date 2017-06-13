'use strict';

module.exports = AuthService;

/**
 * @ngInject
 */
function AuthService($cookieStore, $q) {
    var currentUser = {};
    var AuthService = {
        login: login,
        load: load,
        isLoggedIn: isLoggedIn,
        getUser: getUser,
        setUser: setUser,
        currentUser: currentUser
    };

    //////////

    function login(user) {
        // stubbing API for login
        return $q(function(resolve, reject) {
            if (user && user.username === 'bookbottles' && user.password === 'showcase') {
                setUser(user);
                resolve();
            } else {
                reject({
                    message: 'Username or password is not correct.'
                });
            }
        });
    }

    function logout() {
        $cookieStore.remove('user');
    }

    function load() {
        return $q(function(resolve, reject) {
            currentUser = getUser();
            if (currentUser) {
                resolve(currentUser);
            } else {
                reject();
            }
        });
    }

    function isLoggedIn() {
        return this.getUser() && currentUser.hasOwnProperty('username');
    }

    function getUser() {
        return $cookieStore.get('user');
    }

    function setUser(user) {
        return $cookieStore.put('user', user);
    }

    load();
    return AuthService;
}
