/*jshint node:true*/
module.exports = {

  description: 'Set up additional packages for Ember apps',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addPackagesToProject([
      { name: 'ember-browserify', target: '^1.1.9' },
      { name: 'ember-redux', target: '^1.4.0' },
      { name: 'redux', target: '^3.4.0' },
      { name: 'redux-thunk', target: '^2.0.1' }
    ]);
  }
};
