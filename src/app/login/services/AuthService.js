'use strict';

module.exports = AuthService;

/**
 * @ngInject
 */
function AuthService($cookieStore, $q, $location) {
    var currentUser = {};
    var AuthService = {
        login: login,
        logout: logout,
        load: load,
        isLoggedIn: isLoggedIn,
        isLoggedInAsync: isLoggedInAsync,
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
        $location.path('/login');
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


    function isLoggedInAsync() {
        return $q(function(resolve, reject) {
            load().then(function(user) {
                if (user) {
                    resolve(user);
                } else {
                    reject();
                }
            }).catch(function() {
                reject();
            });
        });
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
