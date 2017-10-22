var path = require('path');

var createPattern = function (pattern) {
  return {pattern: pattern, included: true, served: true, watched: false}
};

var initSuman = function (files) {
  // var jasminePath = path.dirname(require.resolve('jasmine-core'));
  // files.unshift(createPattern(path.join(__dirname, '/adapter.js')));
  // files.unshift(createPattern(path.join(__dirname, '/boot.js')));
  // files.unshift(createPattern(jasminePath + '/jasmine-core/jasmine.js'))

  var sumanPath = path.dirname(require.resolve('suman'));
  files.unshift(createPattern(path.join(__dirname, '/adapter.js')));
  files.unshift(createPattern(path.join(__dirname, '/boot.js')));
  files.unshift(createPattern(sumanPath));
};

initSuman.$inject = ['config.files'];

module.exports = {
  'framework:suman': ['factory', initSuman]
};
