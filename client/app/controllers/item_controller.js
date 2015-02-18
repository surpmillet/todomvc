/**
 * Created by she on 2015/2/17.
 */
/*global App, Ember */
(function () {
    'use strict';
    App.ItemController = Ember.Controller.extend({
        bufferedTitle: Ember.computed.oneWay('model.title'),
        actions: {
            editItem: function () {
                this.set('model.isEditing', true);
            },
            saveItem: function () {
                var bufferedTitle = this.get('bufferedTitle').trim();
                var todo = this.get('model');
                Ember.isEmpty(bufferedTitle) ? todo.deleteRecord() : todo.set('title', bufferedTitle);
                todo.save();
                this.set('bufferedTitle', bufferedTitle);
                this.set('model.isEditing', false);
            },
            cancelEditing: function () {
                this.set('bufferedTitle', this.get('model.title'));
                this.set('model.isEditing', false);
            },
            removeItem: function () {
                var todo = this.get('model');
                todo.deleteRecord();
                todo.save();
            }
        },
        saveWhenCompleted: function () {
            this.get('model').save();
        }.observes('model.isCompleted')
    });
})();