'use strict'

var babel = require('babel-core')

exports.name = 'babel'
exports.inputFormats = ['es6', 'babel', 'js']
exports.outputFormat = 'js'

/**
 * Babel's available options.
 */
var availableOptions = Object.keys(babel.options)

exports.render = function (str, options) {
  // Remove any invalid options.
  var opts = {}
  var name = null
  options = options || {}
  for (var index = 0; index < availableOptions.length; index++) {
    name = availableOptions[index]
    if (name in options) {
      opts[name] = options[name]
    }
  }

  ['preset', 'plugin'].forEach(function (opt) {
    var plural = opt + 's'
    if (opts[plural]) {
      opts[plural] = opts[plural].map(function (mod) {
        try {
          // eslint-disable-next-line import/no-dynamic-require
          return require('babel-' + opt + '-' + mod)
        } catch (err) {
          return mod
        }
      })
    }
  })

  // Process the new options with Babel.
  return babel.transform(str, opts).code
}
