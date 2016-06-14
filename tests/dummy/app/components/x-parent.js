import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <span class="low-state">{{get-state "low"}}</span>
    <button class="btn-up" onclick={{dispatch "UP"}}>up</button>
    {{x-child
      high=(get-state "high")
      down=(dispatch "DOWN")
    }}
    <span class="name-state">{{get-state "name"}}</span>
    <button class="btn-name" onclick={{dispatch "UPDATE_NAME" name="Zoey"}}>update name</button>
  `
});
