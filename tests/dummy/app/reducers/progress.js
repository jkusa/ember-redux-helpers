export default ((state=80, action) => { // jshint ignore:line
  if(action.type === 'MORE') {
    if(state < 100) {
      state = state + 10;
    }
  }

  if(action.type === 'LESS') {
    if(state > 0) {
      state = state - 10;
    }
  }

  return state;
});
