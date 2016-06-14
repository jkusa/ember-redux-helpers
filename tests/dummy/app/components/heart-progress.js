import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

const { computed, get, set } = Ember;

export default Ember.Component.extend({
  layout: hbs`
    <div class="inner-container">
      {{yield}}
    </div>
    <div class="svg-container">
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 5 100 100">
        <path fill-opacity="0" stroke-width="1" stroke="#bbb" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
        <path id="heart-path" fill-opacity="0" stroke-width="3" stroke="#E34C32" d="M81.495,13.923c-11.368-5.261-26.234-0.311-31.489,11.032C44.74,13.612,29.879,8.657,18.511,13.923  C6.402,19.539,0.613,33.883,10.175,50.804c6.792,12.04,18.826,21.111,39.831,37.379c20.993-16.268,33.033-25.344,39.819-37.379  C99.387,33.883,93.598,19.539,81.495,13.923z"/>
      </svg>
    </div>
  `,

  classNames: ['heart-progress'],

  didInsertElement() {
    this._super(...arguments);
    let heart = new ProgressBar.Path(`#${this.elementId} #heart-path`);
    set(this, 'heart', heart);

    heart.set(get(this, 'value'));
  },

  didUpdateAttrs() {
    let heart = get(this, 'heart');
    if(heart) {
      heart.set(get(this, 'value'));
    }
  },

  value: computed('progress', function() {
    let progress = get(this, 'progress');
    if(progress) {
      return progress/100;
    }
    return 0;
  })
});
