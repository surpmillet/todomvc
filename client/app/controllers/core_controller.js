/**
 * Created by she on 2015/2/17.
 */
/*global App, Ember */
(function () {
    'use strict';
    App.CoreController = Ember.ArrayController.extend({
        actions: {
            createItem: function () {
                var title, todo;
                title = this.get('newTitle').trim();
                if (!Ember.isEmpty(title)) {
                    todo = this.store.createRecord('todo', {title: title});
                    todo.save();
                    this.set('newTitle', '');
                }
            },
            clearCompleted: function () {
                var completed = this.get('completed');
                completed.invoke('deleteRecord');
                completed.invoke('save');
            }
        },
        remaining: Ember.computed.filterBy('model', 'isCompleted', false),
        completed: Ember.computed.filterBy('model', 'isCompleted', true),
        allAreDone: function (key, value) {
            if (value !== undefined) {
                this.setEach('isCompleted', !value);
                return value;
            } else {
                return this.get('length') > 0 && !this.isEvery('isCompleted');
            }
        }.property('length', '@each.isCompleted'),
        canToggle: function () {
            return this.get('length') > 0 && !this.isAny('isEditing');
        }.property('length', '@each.isEditing')
    });
})();