import Ember from 'ember';

export default Ember.Helper.extend({

  redux: Ember.inject.service('redux'),

  init() {
    this._super(...arguments);
    this.get('redux').subscribe(() => {
      this.recompute();
    });
  },

  compute(params) {
    let state = this.get('redux').getState();
    return Ember.get(state, params[0]);
  }
});
