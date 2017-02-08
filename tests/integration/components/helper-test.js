import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-parent', 'integration: redux helpers test', {
    integration: true,
    setup() {
        this.inject.service('redux');
    }
});

test('dispatch and get-state can be used to interact with the redux store', function(assert) {
    assert.expect(8);

    this.render(hbs`{{x-parent}}`);

    let $parent  = this.$('.low-state'),
        $child   = this.$('.high-state'),
        $name    = this.$('.name-state');

    /* == Test initial state == */

    assert.equal($parent.text(),
        0,
    'parent rendered the correct initial low state from redux');

    assert.equal($child.text(),
        9,
    'child received the correct initial high state from redux as a prop');

    assert.equal($name.text(),
        'Tomster',
    'parent rendered the correct initial name state from redux');

    /* == Test Dispatch and Rerender == */

    this.$('.btn-up').trigger('click');
    assert.equal($parent.text(),
        1,
    'dispatch action was correctly called and parent rerendered');

    this.$('.btn-down').trigger('click');
    assert.equal($child.text(),
        8,
    'dispatch closure action was correctly called and childed rerendered');

    /* == Test Dispatch and Rerender Again == */

    this.$('.btn-up').trigger('click');
    assert.equal($parent.text(),
        2,
    'dispatch action was correctly called and parent rerendered');

    this.$('.btn-down').trigger('click');
    assert.equal($child.text(),
        7,
    'dispatch closure action was correctly called and childed rerendered');

    /* == Test Dispatch with Parameter == */

    this.$('.btn-name').trigger('click');
    assert.equal($name.text(),
        'Zoey',
    'dispatch action with parameter was correctly called and parent rerendered');
});

test('redux action creator', function(assert) {
    assert.expect(3);

    this.set('thunk', ()=> {
      return dispatch => {
        dispatch({ type: "UPx2" });
      };
    });

    this.set('actionCreator', ()=> {
      return {
        type: "UP"
      };
    });

    this.render(hbs`
      <span class="low-state">{{get-state "low"}}</span>

      <button class="btn-plus-1" onclick={{dispatch (action actionCreator)}}>
        +1
      </button>

      <button class="btn-plus-2" onclick={{dispatch (action thunk)}}>
        +2
      </button>
     `);

    let $parent  = this.$('.low-state');
    assert.equal($parent.text(),
        0,
    'parent rendered the correct initial low state from redux');

    this.$('.btn-plus-1').trigger('click');
    assert.equal($parent.text(),
        1,
    'dispatch action was correctly called and parent rerendered');

    this.$('.btn-plus-2').trigger('click');
    assert.equal($parent.text(),
        3,
    'dispatch action was correctly called and parent rerendered');
});
