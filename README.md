# jstransformer-babel

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-babel.svg)](https://greenkeeper.io/)

[Babel](http://babeljs.io) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-babel/master.svg)](https://travis-ci.org/jstransformers/jstransformer-babel)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-babel/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-babel)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-babel/master.svg)](http://david-dm.org/jstransformers/jstransformer-babel)
[![NPM version](https://img.shields.io/npm/v/jstransformer-babel.svg)](https://www.npmjs.org/package/jstransformer-babel)

## Installation

    npm install jstransformer-babel

## API

```js
var babel = require('jstransformer')(require('jstransformer-babel'))

var src = 'let a = 0'
var transformed = babel.render(src, {presets: ['es2015']})
//=> '"use strict";\n\nvar a = 0;'
```

Only `render` method is implemented, which means that through the JSTransformer architecture all `render*` APIs are available.

Passing options to Babel is supported as well, and all options unsupported by Babel are filtered out before passing them to Babel.

In babel@6 (jstransformer-babel@2), the default of transpiling from ES2015 is removed. As a result, in order to transpile from ES2015 just like in jstransformer-babel@2, pass in `['es2015']` as the value of the `presets` option, just like in the example above. If that is too laborious, you can look into using a `.babelrc` file.

Babel configuration files like `.babelrc` are also supported. They can only be detected if you use the `renderFile*` APIs or manually pass in a `filename` option.

## License

MIT
