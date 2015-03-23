import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    createTodo: function () {
      var title = this.get('newTitle').trim();

      if (! title) {
        return false;
      }

      var todo = this.store.createRecord('todo', {
        title,
        isCompleted: false
      });

      this.set('newTitle', '');

      todo.save();
    }
  },
  remaining: function () {
    return this.filterBy('isCompleted', false).get('length');
  }.property('@each.isCompleted'),
  inflection: function () {
    return this.get('remaining') === 1 ? 'item' : 'items';
  }.property('remaining')
});
