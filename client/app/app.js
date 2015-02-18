/**
 * Created by she on 2015/2/17.
 */
/*global Ember, DS, App:true */
(function () {
    'use strict';
    window.App = Ember.Application.create({});

    App.ApplicationAdapter = DS.LSAdapter.extend({
        namespace: 'TodoMVC'
    });
})();