import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.filter('todo', todo => ! todo.get('isCompleted'));
  },
  renderTemplate: function (controller) {
    this.render('todos/index', { controller });
  }
});
