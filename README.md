# ember-redux-helpers

A set of [Ember](http://emberjs.com) Template Helpers for [Redux.JS](http://redux.js.org)

## Demo Page

 http://jkusa.github.io/ember-redux-helpers/

## Usage

### `{{get-state "state.path"}}`

Helper to fetch and subscribe to state properties in the redux store

```hbs
{!-- component.hbs --}}
{{progress-bar
  progress=(get-state 'progress')
}}
```

Use object paths just like you would with [Ember.get](http://emberjs.com/api/#method_get)

```hbs
{{!-- component.hbs --}}
{{todo-item
  todo=(get-state 'todos.firstObject')
}}
```

### `{{dispatch "TYPE" key=value key=value}}`

Closure action helper to dispatch directly to the redux store

```hs
{{!-- component.hbs --}}
<button onclick={{dispatch 'ADD' value=value}}>
  Click to Add
</button>
```

```js
//reducer.js
export default (state=0, action) => {

  if(action.type === 'ADD') {
    state += action.value;
  }

  return state;
};
```

Arguments provided while invoking the action can be referenced via the __invocationArgs__ property array

```hbs
{{!-- component.hbs --}}
<input onchange=(dispatch 'UPDATE' field='title')>
```

```js
//reducer.js
export default (state={}, action) => {

  if (action.type === 'UPDATE') {

    let { field, invocationArgs } = action;
    state = Object.assign(state, {
      //invocaionArgs contains the event obj
      [field]: invocationArgs[0].target.value
    });

  }

  return state;
};
```

## Compatibility

This addon will work on Ember versions `1.13.x` and up only, due to use of the new `Helper` implementation.

## Thanks

Thanks to @toranb and @rwjblue who inspired this addon.
