import Ember from 'ember';
import ACTION from '../_private/closure-action';

export default Ember.Helper.extend({

  redux: Ember.inject.service('redux'),

  compute([type, ...params], hash) {
    let redux = this.get('redux');

    let action = (...invocationArgs) => {
      Ember.run.join(() => {
        redux.dispatch(
          Object.assign({}, hash, {
            type,
            invocationArgs
          })
        );
      });
    };

    action[ACTION] = true;
    return action;
  }
});
