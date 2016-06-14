export default ((state='Tomster', action) => { // jshint ignore:line
    if(action.type === 'UPDATE_NAME') {
        return action.name;
    }
    return state;
});
