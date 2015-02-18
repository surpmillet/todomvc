/**
 * Created by she on 2015/2/18.
 */
(function () {
    'use strict';
    App.CoreRoute = Ember.Route.extend({
        model: function () {
            return this.store.find('todo');
        }
    });

    App.CoreIndexRoute = App.CoreRoute.extend({
        templateName: 'core/index'
    });

    App.CoreActiveRoute = App.CoreIndexRoute.extend({
        model: function () {
            return this.store.filter('todo', function (todo) {
                return !todo.get('isCompleted');
            });
        }
    });

    App.CoreCompletedRoute = App.CoreIndexRoute.extend({
        model: function () {
            return this.store.filter('todo', function (todo) {
                return todo.get('isCompleted');
            });
        }
    });
})();