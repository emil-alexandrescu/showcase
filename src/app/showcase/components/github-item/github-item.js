'use strict';

module.exports = githubItem;

/**
 * Removes server error when user updates input
 */
function githubItem() {
    return {
        restrict: 'A',
        scope: {
            value: '='
        },
        template: require('./github-item.tpl.jade')
    };
}
