import fp from 'fastpress';

fp.get('/cat', (req, res) => {
  console.log('meow');
});

fp.post('/dog', (req, res) => {
  console.log(req.body);
});

fp.createServer(8080);