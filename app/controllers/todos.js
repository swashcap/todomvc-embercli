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
  }
});
