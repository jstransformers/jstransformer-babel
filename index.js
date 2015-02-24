'use strict';

var babel = require('babel-core');

exports.name = 'babel';
exports.outputFormat = 'js';
exports.render = function(str, options, locals) {
  return babel.transform(str, options).code;
};
