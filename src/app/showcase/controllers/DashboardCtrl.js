'use strict';

module.exports = DashboardCtrl;

/**
 * @ngInject
 */
function DashboardCtrl(AuthService, GithubService) {
    var vm = this;

    vm.user = AuthService.getUser();
    vm.logout = AuthService.logout;
    vm.loading = true;
    GithubService.getInfo().then(function(resp) {
        vm.loading = false;
        vm.totalCount = resp.data.total_count;
        vm.items = resp.data.items;
    });
}
