/**
 * Created by she on 2015/2/17.
 */
/*global App, DS */
(function () {
    'use strict';

    App.Todo = DS.Model.extend({
        title: DS.attr('string'),
        isCompleted: DS.attr('boolean', {defaultValue: false}),
        isEditing: DS.attr('boolean', {defaultValue: false})
    });
})();