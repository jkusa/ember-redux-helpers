export default ((state=0, action) => { // jshint ignore:line
    if(action.type === 'UP') {
      state++;
    }

    if(action.type === 'UPx2') {
      state += 2;
    }
    return state;
});
