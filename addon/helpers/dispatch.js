import Ember from 'ember';
import ACTION from '../_private/closure-action';

export default Ember.Helper.extend({

  redux: Ember.inject.service('redux'),

  compute([reduxAction, ...params], hash) {
    let redux = this.get('redux');

    let emberAction = (...invocationArgs) => {
      Ember.run.join(() => {
        let payload = this.buildAction(reduxAction, hash, invocationArgs);
        redux.dispatch(payload);
      });
    };

    emberAction[ACTION] = true;
    return emberAction;
  },

  buildAction(action, hash, invocationArgs) {

    let actionType = typeof action;
    switch(actionType) {
      case 'function':
        return action(hash, invocationArgs);

      case 'object':
        return Object.assign({}, hash, invocationArgs);

      case 'string':
        return Object.assign({}, hash, {
          type: action,
          invocationArgs
        });
      }
      Ember.assert("fail");
  }
});
