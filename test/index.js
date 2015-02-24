'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:  ', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

// Execute and save the transform.
var input = fs.readFileSync(__dirname + '/input.babel.es6', 'utf8');
var output = transform.render(input);
fs.writeFileSync(__dirname + '/output.js', output);

// Compare to the expected.
var expected = fs.readFileSync(__dirname + '/expected.js', 'utf8');
assertEqual(output, expected);

if (failed) {
  console.log('tests FAILED');
  process.exit(1);
} else {
  console.log('tests PASSED');
}
