'use strict'

const babel = require('@babel/core')

exports.name = 'babel'
exports.inputFormats = ['es6', 'babel', 'js']
exports.outputFormat = 'js'

/**
 * Babel's available options.
 */
const availableOptions = Object.keys({
  'filename': null
})

exports.render = function (str, options) {
  // Remove any invalid options.
  const opts = {}
  let name = null
  options = options || {}
  for (let index = 0; index < availableOptions.length; index++) { // eslint-disable-line unicorn/no-for-loop
    name = availableOptions[index]
    if (name in options) {
      opts[name] = options[name]
    }
  }

  ['preset', 'plugin'].forEach(opt => {
    const plural = opt + 's'
    if (opts[plural]) {
      opts[plural] = opts[plural].map(mod => {
        try {
          return require('babel-' + opt + '-' + mod)
        } catch (error) { // eslint-disable-line no-unused-vars
          return mod
        }
      })
    }
  })

  // Process the new options with Babel.
  return babel.transform(str, opts).code
}
