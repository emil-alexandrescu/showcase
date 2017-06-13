'use strict';

module.exports = GithubService;

/**
 * @ngInject
 */
function GithubService($http) {
    var GithubService = {
        getInfo: function() {
            return $http.get("https://api.github.com/search/repositories?q=bookcase");
        }
    }
    return GithubService;
}
