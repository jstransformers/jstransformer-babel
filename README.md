# jstransformer-babel

[Babel](http://babeljs.io) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-babel/master.svg)](https://travis-ci.org/jstransformers/jstransformer-babel)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-babel/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-babel?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-babel/master.svg)](http://david-dm.org/jstransformers/jstransformer-babel)
[![NPM version](https://img.shields.io/npm/v/jstransformer-babel.svg)](https://www.npmjs.org/package/jstransformer-babel)

## Installation

    npm install jstransformer-babel

## API

```js
var babel = require('jstransformer')(require('jstransformer-babel'))

var src = 'let a = 0'
var transformed = babel.render(src)
//=> '"use strict";\n\nvar a = 0;'
```

Only `render` method is implemented, which means that through the JSTransformer architecture all `render*` APIs are available.

Passing options to Babel is supported as well, and all options unsupported by Babel are filtered out before passing them to Babel.

## License

MIT
