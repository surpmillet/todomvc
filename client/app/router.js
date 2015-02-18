/**
 * Created by she on 2015/2/17.
 */
/*global Ember, App */
(function () {
    'use strict';
    App.Router.map(function () {
        this.resource('core', { path: '/' }, function () {
            this.route('active');
            this.route('completed');
        });
    });
})();