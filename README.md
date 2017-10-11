# fastpress

A blazing fast and simple HTTP library for NodeJS

## Features

* ONLY GET and POST endpoints
* Webpack 3 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Misc

### An example of using fastpress

```js
import fp from 'fastpress';

fp.get('/cat', (req, res) => {
  console.log('meow');
});

fp.post('/dog', (req, res) => {
  console.log(req.body);
});

fp.createServer(8080);
```

## Readings

* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)