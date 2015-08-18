'use strict';

var babel = require('babel-core');

exports.name = 'babel';
exports.inputFormats = ['es6', 'babel'];
exports.outputFormat = 'js';

/**
 * Babel's available options.
 */
var availableOptions = [
  'filename',
  'filenameRelative',
  'blacklist',
  'whitelist',
  'loose',
  'optional',
  'nonStandard',
  'highlightCode',
  'only',
  'ignore',
  'jsxPragma',
  'auxiliaryComment',
  'sourceMaps',
  'inputSourceMap',
  'sourceMapTarget',
  'sourceFileName',
  'sourceRoot',
  'moduleRoot',
  'modules',
  'moduleIds',
  'moduleId',
  'getModuleId',
  'resolveModuleSource',
  'keepModuleIdExtensions',
  'externalHelpers',
  'code',
  'ast',
  'stage',
  'compact',
  'comments',
  'shouldPrintComment',
  'metadataUsedHelpers',
  'env',
  'retainLines',
  'babelrc'
];

exports.render = function(str, options, locals) {
  // Remove any invalid options.
  var opts = {};
  var name = null;
  options = options || {};
  for (var index in availableOptions) {
    name = availableOptions[index];
    if (name in options) {
      opts[name] = options[name];
    }
  }

  // Process the new options with Babel.
  return babel.transform(str, opts).code;
};
