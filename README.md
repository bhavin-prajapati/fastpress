# fastpress

A blazing fast and simple HTTP library for NodeJS

## Features

* Only supports GET and POST Requests
* Webpack 3 based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Misc

### An example of using fastpress

```js
const fastpress = require('fastpress');
const app = new fastpress();

app.get('/cat', (req, res) => {
  res.send('meow!')
});

app.post('/dog', (req, res) => {
  console.log(req.body);
  res.send('bark!')
});

app.listen(8080, () => {
  console.log('Server listening on ' + HOST + ':' + _port);  
});
```

## Readings

* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)